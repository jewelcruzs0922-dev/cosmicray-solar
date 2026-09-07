"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { SectionErrorBoundary } from "@/components/SectionErrorBoundary";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/home/HeroSection";
import CertMarquee from "@/components/home/CertMarquee";

const SolutionsGrid = dynamic(() => import("@/components/home/SolutionsGrid"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "400px", margin: "0 var(--space-6)" }} /> });
const StatsSection = dynamic(() => import("@/components/home/StatsSection"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "200px", margin: "0 var(--space-6)" }} /> });
const ProcessSteps = dynamic(() => import("@/components/home/ProcessSteps"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "300px", margin: "0 var(--space-6)" }} /> });
const ResultsSection = dynamic(() => import("@/components/home/ResultsSection"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "400px", margin: "0 var(--space-6)" }} /> });
const ReviewsSection = dynamic(() => import("@/components/home/ReviewsSection"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "400px", margin: "0 var(--space-6)" }} /> });
const QuoteEstimator = dynamic(() => import("@/components/home/QuoteEstimator"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "400px", margin: "0 var(--space-6)" }} /> });
const FaqSection = dynamic(() => import("@/components/home/FaqSection"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "400px", margin: "0 var(--space-6)" }} /> });
const ShopSection = dynamic(() => import("@/components/home/ShopSection"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "400px", margin: "0 var(--space-6)" }} /> });
const CtaSection = dynamic(() => import("@/components/home/CtaSection"), { loading: () => <div className="skeleton skeleton--card" style={{ height: "200px", margin: "0 var(--space-6)" }} /> });

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
      <SectionErrorBoundary name="Reviews"><AnimatedSection><ReviewsSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="QuoteEstimator"><AnimatedSection><QuoteEstimator /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="FAQ"><AnimatedSection><FaqSection /></AnimatedSection></SectionErrorBoundary>
      <SectionErrorBoundary name="CTA"><AnimatedSection><CtaSection /></AnimatedSection></SectionErrorBoundary>
    </>
  );
}
