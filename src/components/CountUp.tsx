"use client";

import { useEffect } from "react";

export default function CountUp() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nums = document.querySelectorAll<HTMLElement>("[data-count]");
    if (!nums.length) return;

    const animate = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute("data-count") || "0", 10);
      const duration = prefersReduced ? 0 : 2000;
      if (duration === 0) {
        el.textContent = target.toLocaleString();
        return;
      }
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            animate(el);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    nums.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
