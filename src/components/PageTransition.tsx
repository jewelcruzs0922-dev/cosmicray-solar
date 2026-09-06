"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      setTransitioning(true);
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      const timer = setTimeout(() => {
        setTransitioning(false);
        if (hash) {
          const target = document.querySelector(hash);
          if (target) {
            const headerH = 72;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
            window.scrollTo({ top, behavior: "smooth" });
            history.replaceState(null, "", pathname);
          }
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Handle hash on initial mount (cross-page navigation arriving with hash)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    let cancelled = false;
    let retries = 0;
    const scrollToHash = () => {
      if (cancelled || retries > 60) return;
      retries++;
      const target = document.querySelector(hash);
      if (target) {
        const headerH = 72;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", window.location.pathname);
      } else {
        requestAnimationFrame(scrollToHash);
      }
    };
    requestAnimationFrame(scrollToHash);
    return () => { cancelled = true; };
  }, []);

  return (
    <div
      style={{
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      {children}
    </div>
  );
}
