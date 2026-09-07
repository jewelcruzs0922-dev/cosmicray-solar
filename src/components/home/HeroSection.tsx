"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { PHONE, PHONE_LINK } from "@/lib/constants";

const slides = [
  { src: "https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg", alt: "Aerial view of suburban neighborhood with solar panels on rooftops", tag: "Residential Solar", caption: "Powering 2,400+ homes nationwide" },
  { src: "https://images.pexels.com/photos/22601673/pexels-photo-22601673.jpeg", alt: "High angle view of suburban houses with solar panels", tag: "Community Impact", caption: "Neighborhoods transformed by clean energy" },
  { src: "https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg", alt: "Solar panels installed on a suburban home with greenery", tag: "Smart Investment", caption: "Increase your home value by 4%" },
  { src: "https://images.pexels.com/photos/35417742/pexels-photo-35417742.jpeg", alt: "Solar panels on rooftop during golden sunset", tag: "Golden Hour", caption: "Harvesting energy from sunrise to sunset" },
];

export default function HeroSection() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const prefersReducedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Now serving nationwide
          </div>
          <h1 className="hero__title">
            <span className="hero__title-line">Cut your electric bill</span>
            <span className="hero__title-line">
              by <em className="hero__title-accent">75%</em>
            </span>
          </h1>
          <p className="hero__subtitle">
            Professional solar installations that pay for themselves in 6 years. We handle everything — permits, installation, net metering.
          </p>
          <div className="hero__actions">
            <a href="/schedule" className="btn btn--primary btn--large">
              Get your free estimate
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href={PHONE_LINK} className="btn btn--ghost btn--large">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {PHONE}
            </a>
          </div>
          <div className="hero__proof">
            <div className="hero__proof-avatars">
              <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              <Image src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              <Image src="https://images.pexels.com/photos/1181516/pexels-photo-1181516.jpeg" alt="" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              <Image src="https://images.pexels.com/photos/1065082/pexels-photo-1065082.jpeg" alt="" width="36" height="36" loading="eager" className="hero__proof-avatar" />
            </div>
            <div className="hero__proof-text">
              <strong>2,400+</strong> homeowners already saving
              <div className="hero__proof-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            </div>
          </div>
        </div>
        <div className="hero__visual">
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
          <div className="hero__stats-row">
            <div className="hero__stat">
              <span className="hero__stat-value">$1,847</span>
              <span className="hero__stat-label">Avg. yearly savings</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">6.2 yrs</span>
              <span className="hero__stat-label">Average payback</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">4.9/5.0</span>
              <span className="hero__stat-label">2,400+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
