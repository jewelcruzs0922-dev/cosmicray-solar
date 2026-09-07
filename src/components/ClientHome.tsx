"use client";

import { useEffect } from "react";
import { SectionErrorBoundary } from "@/components/SectionErrorBoundary";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/home/HeroSection";
import CertMarquee from "@/components/home/CertMarquee";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import StatsSection from "@/components/home/StatsSection";
import ShopSection from "@/components/home/ShopSection";
import ProcessSteps from "@/components/home/ProcessSteps";
import ResultsSection from "@/components/home/ResultsSection";
import AboutPreview from "@/components/home/AboutPreview";
import FinancingSection from "@/components/home/FinancingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import SavingsCalculator from "@/components/home/SavingsCalculator";
import ContactFormSection from "@/components/home/ContactFormSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CtaSection from "@/components/home/CtaSection";

export default function ClientHome() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            const duration = 1400;
            const start = performance.now();
            const update = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(target * eased).toLocaleString();
              if (progress < 1) requestAnimationFrame(update);
              else el.textContent = target.toLocaleString();
            };
            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <SectionErrorBoundary name="Certifications"><CertMarquee /></SectionErrorBoundary>
      <SectionErrorBoundary name="Solutions"><AnimatedSection><SolutionsGrid /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Statistics"><AnimatedSection><StatsSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Shop"><AnimatedSection><ShopSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Process"><AnimatedSection><ProcessSteps /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Results"><AnimatedSection><ResultsSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="About"><AnimatedSection><AboutPreview /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Financing"><AnimatedSection><FinancingSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Testimonials"><AnimatedSection><TestimonialsSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="FAQ"><AnimatedSection><FaqSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Calculator"><AnimatedSection><SavingsCalculator /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Contact"><AnimatedSection><ContactFormSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="Newsletter"><AnimatedSection><NewsletterSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="CTA"><AnimatedSection><CtaSection /></AnimatedSection></SectionErrorBoundary>
    </>
  );
}
