"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";

const slides = [
  { src: "https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg", alt: "Aerial view of suburban neighborhood with solar panels on rooftops", tag: "Residential Solar", caption: "Powering 2,400+ homes nationwide" },
  { src: "https://images.pexels.com/photos/22601673/pexels-photo-22601673.jpeg", alt: "High angle view of suburban houses with solar panels", tag: "Community Impact", caption: "Neighborhoods transformed by clean energy" },
  { src: "https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg", alt: "Solar panels installed on a suburban home with greenery", tag: "Smart Investment", caption: "Increase your home value by 4%" },
  { src: "https://images.pexels.com/photos/35417742/pexels-photo-35417742.jpeg", alt: "Solar panels on rooftop during golden sunset", tag: "Golden Hour", caption: "Harvesting energy from sunrise to sunset" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

export default function HeroSection() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const prefersReducedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => { prefersReducedRef.current = e.matches; };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const startTimer = useCallback(() => {
    if (prefersReducedRef.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!document.hidden) setHeroSlide((s) => (s + 1) % slides.length);
    }, 4000);
  }, []);

  useEffect(() => {
    if (prefersReducedRef.current) return;
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goToSlide = useCallback((index: number) => {
    setHeroSlide(index);
    setUserInteracted(true);
    startTimer();
  }, [startTimer]);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__noise" />
      <motion.div className="hero__mesh" style={{ y: meshY }} />
      <div className="hero__waves">
        <div className="hero__wave hero__wave--1" />
        <div className="hero__wave hero__wave--2" />
        <div className="hero__wave hero__wave--3" />
        <div className="hero__wave hero__wave--4" />
        <div className="hero__wave hero__wave--5" />
      </div>
      <div className="hero__orbital">
        <div className="hero__orbital-ring" />
        <div className="hero__orbital-ring hero__orbital-ring--2" />
      </div>
      <div className="hero__inner">
        <motion.div className="hero__content" style={{ y: contentY }}>
          <motion.div className="hero__badge" custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="hero__badge-dot" />
            Now serving nationwide
          </motion.div>
          <h1 className="hero__title">
            <motion.span className="hero__title-line" custom={1} variants={fadeUp} initial="hidden" animate="visible">Power Your</motion.span>
            <motion.span className="hero__title-line" custom={2} variants={fadeUp} initial="hidden" animate="visible">
              Home <em className="hero__title-accent">With the</em>
            </motion.span>
            <motion.span className="hero__title-line hero__title-line--accent" custom={3} variants={fadeUp} initial="hidden" animate="visible">Sun</motion.span>
          </h1>
          <motion.p className="hero__subtitle" custom={4} variants={fadeUp} initial="hidden" animate="visible">
            Professional solar installations that cut your electricity bills by up to 75%. We handle everything — from permits to net metering setup.
          </motion.p>
          <motion.div className="hero__actions" custom={5} variants={fadeUp} initial="hidden" animate="visible">
            <MagneticButton className="btn btn--primary btn--large" href="#contact-form">
              <span className="btn__text">Start Saving Today</span>
              <span className="btn__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
            </MagneticButton>
            <a href="#how-it-works" className="btn btn--ghost btn--large">See How It Works</a>
          </motion.div>
          <motion.div className="hero__proof" custom={6} variants={fadeUp} initial="hidden" animate="visible">
            <div className="hero__proof-avatars">
              <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Satisfied solar customer" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              <Image src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="Happy homeowner with solar panels" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              <Image src="https://images.pexels.com/photos/1181516/pexels-photo-1181516.jpeg" alt="Solar energy customer" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              <Image src="https://images.pexels.com/photos/1065082/pexels-photo-1065082.jpeg" alt="Ecstatic homeowner with reduced energy bills" width="36" height="36" loading="eager" className="hero__proof-avatar" />
            </div>
            <div className="hero__proof-text">
              <strong>2,400+</strong> homeowners already saving
              <div className="hero__proof-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="hero__visual" custom={3} variants={fadeUp} initial="hidden" animate="visible" style={{ y: parallaxY }}>
          <div className="hero__carousel" id="hero-carousel" role="region" aria-label="Featured solar installations" aria-roledescription="carousel"
            onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
            onMouseLeave={() => startTimer()}
          >
            <div className="hero__carousel-viewport" aria-live={userInteracted ? "polite" : "off"}>
              {slides.map((slide, i) => (
                <div key={i} className={`hero__slide${heroSlide === i ? " hero__slide--active" : ""}`} data-slide={i} role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${slides.length}: ${slide.tag}`}>
                  <Image src={slide.src} alt={slide.alt} width={600} height={400} sizes="(max-width: 1024px) 100vw, 600px" {...(i === 0 ? { priority: true } : { loading: "lazy" as const })} />
                  <div className="hero__slide-overlay" />
                  <div className="hero__slide-content">
                    <span className="hero__slide-tag">{slide.tag}</span>
                    <span className="hero__slide-caption">{slide.caption}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero__carousel-nav">
              {slides.map((_, i) => (
                <button key={i} className={`hero__carousel-dot${heroSlide === i ? " hero__carousel-dot--active" : ""}`} data-dot={i} aria-label={`Slide ${i + 1}`} onClick={() => goToSlide(i)} />
              ))}
            </div>
          </div>
          <motion.div className="hero__float-card hero__float-card--savings" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <div className="hero__float-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
            <div><span className="hero__float-value">$1,847</span><span className="hero__float-label">Avg. yearly savings</span></div>
          </motion.div>
          <motion.div className="hero__float-card hero__float-card--payback" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <div className="hero__float-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
            <div><span className="hero__float-value">6.2 yrs</span><span className="hero__float-label">Average payback</span></div>
          </motion.div>
          <motion.div className="hero__float-card hero__float-card--rating" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <div className="hero__float-icon hero__float-icon--accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></div>
            <div><span className="hero__float-value">4.9/5.0</span><span className="hero__float-label">2,400+ reviews</span></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="var(--color-surface)" /></svg>
      </div>
    </section>
  );
}
