"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { useToast } from "@/components/Toast";

const products = [
  { id: 1, name: "SunPower Maxeon 6 400W", category: "panels", price: 399, badge: "Best Seller", desc: "High-efficiency residential solar panel with 22.8% efficiency rating.", img: "https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg" },
  { id: 2, name: "REC Alpha Pure-R 430W", category: "panels", price: 429, badge: "New", desc: "Premium heterojunction technology for maximum energy production.", img: "https://images.pexels.com/photos/9799702/pexels-photo-9799702.jpeg" },
  { id: 10, name: "Panasonic EverVolt HK 410W", category: "panels", price: 449, desc: "All-black premium panel with 21.8% efficiency and 25-year warranty.", img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" },
  { id: 11, name: "Canadian Solar HiKu6 450W", category: "panels", price: 319, badge: "Value Pick", desc: "Mono PERC technology offering excellent performance at a competitive price.", img: "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg" },
  { id: 12, name: "LG Prime 2 440W", category: "panels", price: 479, desc: "N-type tandem cell technology with superior low-light performance.", img: "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg" },
  { id: 3, name: "Tesla Powerwall 3", category: "batteries", price: 8500, badge: "Popular", desc: "13.5 kWh home battery with integrated solar inverter.", img: "https://images.pexels.com/photos/33751679/pexels-photo-33751679.jpeg" },
  { id: 4, name: "Enphase IQ Battery 5P", category: "batteries", price: 4800, desc: "Modular 5 kWh battery with industry-leading round-trip efficiency.", img: "https://images.pexels.com/photos/33751638/pexels-photo-33751638.jpeg" },
  { id: 13, name: "Generac PWRcell 9kWh", category: "batteries", price: 5200, desc: "Modular battery system with fast backup power switching.", img: "https://images.pexels.com/photos/36085816/pexels-photo-36085816.jpeg" },
  { id: 14, name: "Enphase IQ8+ Microinverter", category: "inverters", price: 189, badge: "Top Rated", desc: "Module-level power optimization with 97.5% CEC efficiency.", img: "https://images.pexels.com/photos/33438229/pexels-photo-33438229.jpeg" },
  { id: 15, name: "SolarEdge Home 10kW", category: "inverters", price: 2199, desc: "Hybrid inverter with integrated EV charger and battery backup.", img: "https://images.pexels.com/photos/37929911/pexels-photo-37929911.jpeg" },
  { id: 16, name: "Fronius Primo 7.0", category: "inverters", price: 1899, desc: "SnapINverter design with integrated data communication.", img: "https://images.pexels.com/photos/33751639/pexels-photo-33751639.jpeg" },
  { id: 5, name: "ChargePoint Home Flex", category: "chargers", price: 649, badge: "Top Rated", desc: "Level 2 EV charger with 50A capacity and WiFi connectivity.", img: "https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg" },
  { id: 6, name: "Wallbox Pulsar Plus 48A", category: "chargers", price: 599, desc: "Compact smart EV charger with app control and scheduling.", img: "https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg" },
  { id: 17, name: "Tesla Universal Wall Connector", category: "chargers", price: 475, badge: "New", desc: "Up to 48A output with Wi-Fi connectivity and load sharing.", img: "https://images.pexels.com/photos/27355829/pexels-photo-27355829.jpeg" },
  { id: 18, name: "Emporia Level 2 EV Charger", category: "chargers", price: 399, desc: "48A fast charging with real-time energy monitoring app.", img: "https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg" },
  { id: 7, name: "Solar Monitoring System", category: "accessories", price: 299, desc: "Real-time monitoring for your solar production and consumption.", img: "https://images.pexels.com/photos/35425767/pexels-photo-35425767.jpeg" },
  { id: 8, name: "Rapid Shutdown Device", category: "accessories", price: 189, desc: "NEC 2017/2020 compliant rapid shutdown for solar installations.", img: "https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg" },
  { id: 9, name: "IronRidge Roof Mount Kit", category: "accessories", price: 349, badge: "Essential", desc: "Complete roof mounting system for residential solar installations.", img: "https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg" },
  { id: 19, name: "Midnite Solar Surge Protector", category: "accessories", price: 149, desc: "Type 1+2 SPD for comprehensive solar system surge protection.", img: "https://images.pexels.com/photos/30144993/pexels-photo-30144993.jpeg" },
  { id: 20, name: "Sense Energy Monitor", category: "accessories", price: 299, badge: "Smart", desc: "Real-time whole-home energy monitoring with AI-powered device detection.", img: "https://images.pexels.com/photos/35573433/pexels-photo-35573433.jpeg" },
];

const faqItems = [
  { q: "How much can I save with solar panels?", a: "Most homeowners save 50-75% on electricity bills. On average, our customers save $1,800-$2,400 per year." },
  { q: "How long does installation take?", a: "Most installations complete in 1-2 days. The full process takes 4-8 weeks including permitting." },
  { q: "Do solar panels work on cloudy days?", a: "Yes. Solar panels produce energy from daylight, generating 10-25% capacity on cloudy days." },
  { q: "What happens during a power outage?", a: "With battery storage, your system automatically switches to backup power during outages." },
  { q: "Are there tax credits available?", a: "The federal ITC covers 30% of installation cost. Many states offer additional rebates." },
  { q: "What warranty do you offer?", a: "25-year panel warranty, 12-year inverter warranty, and 10-year workmanship warranty." },
];

const INITIAL_PRODUCT_COUNT = 4;

export default function ClientHome() {
  const { cart, addToCart: cartAddToCart } = useCart();
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [calcBill, setCalcBill] = useState(250);
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);
  const newsletterFormRef = useRef<HTMLFormElement>(null);

  // ── Reveal on scroll ──
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const heroReveals = document.querySelectorAll("[data-reveal]");
    const t = setTimeout(() => {
      heroReveals.forEach((el) => el.classList.add("is-revealed"));
    }, 200);

    const revealEls = document.querySelectorAll(
      ".bento__card, .process-step, .testimonial-card, .stats__item, .faq__item, .product-card, .financing__card, .about__journey-card, .about__team-member, .about__value-card, [data-reveal], .img-reveal"
    );
    revealEls.forEach((el) => (el as HTMLElement).classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  // ── Counter animation ──
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            const duration = prefersReduced ? 0 : 1400;
            if (duration === 0) {
              el.textContent = target.toLocaleString();
            } else {
              const start = performance.now();
              const update = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(target * eased).toLocaleString();
                if (progress < 1) requestAnimationFrame(update);
                else el.textContent = target.toLocaleString();
              };
              requestAnimationFrame(update);
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Hero carousel ──
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    heroTimerRef.current = setInterval(() => {
      if (!document.hidden) setHeroSlide((s) => (s + 1) % 4);
    }, 4000);
    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setHeroSlide(index);
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
      heroTimerRef.current = setInterval(() => {
        if (!document.hidden) setHeroSlide((s) => (s + 1) % 4);
      }, 4000);
    },
    []
  );

  // ── Cart helpers ──
  const addToCart = useCallback((productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    cartAddToCart({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1, category: product.category });
    showToast(product.name + " added to cart");
    // ── E-commerce Tracking ──
    if (typeof window.gtag === "function") {
      window.gtag("event", "add_to_cart", { items: [{ item_id: product.id, item_name: product.name, price: product.price, item_category: product.category }] });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "AddToCart", { content_name: product.name, content_category: product.category, value: product.price, currency: "USD" });
    }
  }, [cartAddToCart, showToast]);

  // ── Product filtering ──
  const filteredProducts = activeFilter === null ? products : products.filter((p) => p.category === activeFilter);
  const visibleProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, INITIAL_PRODUCT_COUNT);
  const hasMore = filteredProducts.length > INITIAL_PRODUCT_COUNT && !showAllProducts;

  // ── Calculator ──
  const yearlyBill = calcBill * 12;
  const yearlySavings = Math.round(yearlyBill * 0.75);
  const systemSizeKw = Math.min(15, Math.max(4, Math.round((yearlyBill / (365 * 5 * 1.3 * 0.22)) * 10) / 10));
  const paybackYears = Math.round((systemSizeKw * 1000 * 2.10 / yearlySavings) * 10) / 10;
  const twentyFiveYrSavings = yearlySavings * 25;

  // ── Contact form ──
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = contactFormRef.current;
    if (!form) return;

    // ── Inline validation ──
    const nameEl = form.querySelector("#contact-name") as HTMLInputElement;
    const emailEl = form.querySelector("#contact-email") as HTMLInputElement;
    const phoneEl = form.querySelector("#contact-phone") as HTMLInputElement;
    const nameError = form.querySelector("#name-error") as HTMLElement;
    const emailError = form.querySelector("#email-error") as HTMLElement;
    const phoneError = form.querySelector("#phone-error") as HTMLElement;
    let valid = true;

    // Clear previous errors
    form.querySelectorAll(".form-error").forEach((el) => { (el as HTMLElement).textContent = ""; });
    form.querySelectorAll(".form-group input").forEach((el) => { el.classList.remove("error"); });

    if (!nameEl.value.trim()) {
      nameError.textContent = "Name is required";
      nameEl.classList.add("error");
      valid = false;
    }
    if (!emailEl.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailError.textContent = "Valid email is required";
      emailEl.classList.add("error");
      valid = false;
    }
    if (!phoneEl.value.trim()) {
      phoneError.textContent = "Phone is required";
      phoneEl.classList.add("error");
      valid = false;
    }
    if (!valid) return;

    setContactStatus("sending");
    const formData = new FormData(form);
    formData.append("_subject", "New Quote Request from Cosmic Ray Website");
    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setContactStatus("sent");
        form.reset();
        showToast("Thank you! We'll contact you within 24 hours.");
        // ── Conversion Tracking ──
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", { event_category: "contact_form", event_label: "quote_request" });
        }
        if (typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
        setTimeout(() => setContactStatus("idle"), 4000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setContactStatus("error");
      showToast("Something went wrong. Please call us at (555) 123-4567.");
      setTimeout(() => setContactStatus("idle"), 4000);
    }
  };

  // ── Newsletter form ──
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = newsletterFormRef.current;
    if (!form) return;
    const emailEl = form.querySelector("#newsletter-email") as HTMLInputElement;
    if (!emailEl.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.classList.add("error");
      emailEl.focus();
      return;
    }
    emailEl.classList.remove("error");
    setNewsletterStatus("sending");
    const formData = new FormData(form);
    formData.append("_subject", "New Newsletter Subscriber");
    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setNewsletterStatus("sent");
        form.reset();
        showToast("Thanks for subscribing!");
        setTimeout(() => setNewsletterStatus("idle"), 3000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  // ── Magnetic button effect ──
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const btns = document.querySelectorAll(".btn--magnetic");
    const cleanups: (() => void)[] = [];
    btns.forEach((btn) => {
      const onMouseMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = btn.getBoundingClientRect();
        const x = me.clientX - rect.left - rect.width / 2;
        const y = me.clientY - rect.top - rect.height / 2;
        (btn as HTMLElement).style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const onMouseLeave = () => { (btn as HTMLElement).style.transform = "translate(0,0)"; };
      btn.addEventListener("mousemove", onMouseMove);
      btn.addEventListener("mouseleave", onMouseLeave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", onMouseMove);
        btn.removeEventListener("mouseleave", onMouseLeave);
      });
    });
    return () => { cleanups.forEach((fn) => fn()); };
  }, []);

  // ── 3D tilt on floating cards ──
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const cards = document.querySelectorAll("[data-float]");
    const cleanups: (() => void)[] = [];
    cards.forEach((card) => {
      const onMouseMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = (me.clientX - rect.left) / rect.width - 0.5;
        const y = (me.clientY - rect.top) / rect.height - 0.5;
        (card as HTMLElement).style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px) scale(1.03)`;
      };
      const onMouseLeave = () => { (card as HTMLElement).style.transform = ""; };
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    });
    return () => { cleanups.forEach((fn) => fn()); };
  }, []);

  // ── Hero parallax on scroll ──
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY <= 800) {
            const factor = scrollY * 0.12;
            const heroVisual = document.querySelector(".hero__visual") as HTMLElement | null;
            const heroContent = document.querySelector(".hero__content") as HTMLElement | null;
            const heroMesh = document.querySelector(".hero__mesh") as HTMLElement | null;
            const heroOrbital = document.querySelector(".hero__orbital") as HTMLElement | null;
            if (heroVisual) heroVisual.style.transform = `translateY(${factor * 0.6}px)`;
            if (heroContent) heroContent.style.transform = `translateY(${factor * 0.3}px)`;
            if (heroMesh) heroMesh.style.transform = `translateY(${factor * 0.15}px)`;
            if (heroOrbital) heroOrbital.style.transform = `translate(-50%,-50%) translateY(${factor * 0.2}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__noise" />
        <div className="hero__mesh" />
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
          <div className="hero__content">
            <div className="hero__badge" data-reveal>
              <span className="hero__badge-dot" />
              Now serving nationwide
            </div>
            <h1 className="hero__title">
              <span className="hero__title-line" data-reveal data-reveal-delay="1">Power Your</span>
              <span className="hero__title-line" data-reveal data-reveal-delay="2">
                Home <em className="hero__title-accent" data-reveal data-reveal-delay="3">With the</em>
              </span>
              <span className="hero__title-line hero__title-line--accent" data-reveal data-reveal-delay="4">Sun</span>
            </h1>
            <p className="hero__subtitle" data-reveal data-reveal-delay="5">
              Professional solar installations that cut your electricity bills by up to 75%. We handle everything — from permits to net metering setup.
            </p>
            <div className="hero__actions" data-reveal data-reveal-delay="6">
              <a href="#contact-form" className="btn btn--primary btn--large btn--magnetic">
                <span className="btn__text">Start Saving Today</span>
                <span className="btn__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
              <a href="#how-it-works" className="btn btn--ghost btn--large">See How It Works</a>
            </div>
            <div className="hero__proof" data-reveal data-reveal-delay="7">
              <div className="hero__proof-avatars">
                <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Satisfied solar customer" width="36" height="36" loading="eager" className="hero__proof-avatar" />
                <Image src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="Happy homeowner with solar panels" width="36" height="36" loading="eager" className="hero__proof-avatar" />
                <Image src="https://images.pexels.com/photos/1181516/pexels-photo-1181516.jpeg" alt="Solar energy customer" width="36" height="36" loading="eager" className="hero__proof-avatar" />
                <Image src="https://images.pexels.com/photos/1065082/pexels-photo-1065082.jpeg" alt="Ecstatic homeowner with reduced energy bills" width="36" height="36" loading="eager" className="hero__proof-avatar" />
              </div>
              <div className="hero__proof-text">
                <strong>2,400+</strong> homeowners already saving
                <div className="hero__proof-stars" aria-hidden="true">★★★★★</div>
              </div>
            </div>
          </div>
          <div className="hero__visual" data-reveal data-reveal-delay="3">
            <div className="hero__carousel" id="hero-carousel"
              role="region"
              aria-label="Featured solar installations"
              aria-roledescription="carousel"
              onMouseEnter={() => { if (heroTimerRef.current) clearInterval(heroTimerRef.current); }}
              onMouseLeave={() => {
                const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                if (prefersReduced) return;
                heroTimerRef.current = setInterval(() => {
                  if (!document.hidden) setHeroSlide((s) => (s + 1) % 4);
                }, 4000);
              }}
            >
              <div className="hero__carousel-viewport" aria-live="off">
                {[
                  { src: "https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg", alt: "Aerial view of suburban neighborhood with solar panels on rooftops", tag: "Residential Solar", caption: "Powering 2,400+ homes nationwide" },
                  { src: "https://images.pexels.com/photos/22601673/pexels-photo-22601673.jpeg", alt: "High angle view of suburban houses with solar panels", tag: "Community Impact", caption: "Neighborhoods transformed by clean energy" },
                  { src: "https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg", alt: "Solar panels installed on a suburban home with greenery", tag: "Smart Investment", caption: "Increase your home value by 4%" },
                  { src: "https://images.pexels.com/photos/35417742/pexels-photo-35417742.jpeg", alt: "Solar panels on rooftop during golden sunset", tag: "Golden Hour", caption: "Harvesting energy from sunrise to sunset" },
                ].map((slide, i) => (
                  <div key={i} className={`hero__slide${heroSlide === i ? " hero__slide--active" : ""}`} data-slide={i} role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of 4: ${slide.tag}`}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={600}
                      height={400}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      {...(i === 0 ? { priority: true } : { loading: "lazy" })}
                    />
                    <div className="hero__slide-overlay" />
                    <div className="hero__slide-content">
                      <span className="hero__slide-tag">{slide.tag}</span>
                      <span className="hero__slide-caption">{slide.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero__carousel-nav">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className={`hero__carousel-dot${heroSlide === i ? " hero__carousel-dot--active" : ""}`}
                    data-dot={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => goToSlide(i)}
                  />
                ))}
              </div>
            </div>
            <div className="hero__float-card hero__float-card--savings" data-float="slow">
              <div className="hero__float-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <span className="hero__float-value">$1,847</span>
                <span className="hero__float-label">Avg. yearly savings</span>
              </div>
            </div>
            <div className="hero__float-card hero__float-card--payback" data-float="fast">
              <div className="hero__float-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span className="hero__float-value">6.2 yrs</span>
                <span className="hero__float-label">Average payback</span>
              </div>
            </div>
            <div className="hero__float-card hero__float-card--rating" data-float="medium">
              <div className="hero__float-icon hero__float-icon--accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <span className="hero__float-value">4.9/5.0</span>
                <span className="hero__float-label">2,400+ reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="var(--color-surface)" />
          </svg>
        </div>
      </section>

      {/* ── Certifications Marquee ── */}
      <section className="cert-marquee" aria-label="Certifications and Partners">
        <div className="cert-marquee__inner">
          <div className="cert-marquee__header">
            <span className="cert-marquee__label">Certifications &amp; Partners</span>
            <h2 className="cert-marquee__title">Trusted by Industry Leaders</h2>
          </div>
          <div className="cert-marquee__track">
            <div className="cert-marquee__slide">
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="18" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="14" fill="currentColor" letterSpacing="1">ENERGY</text>
                  <text x="0" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="14" fill="currentColor" letterSpacing="1">STAR</text>
                  <path d="M105 11l2 4.2L112 17l-4 3.5 1.2 5L105 23l-4.2 2.5 1.2-5-4-3.5 5-1.8z" fill="currentColor" opacity="0.85" />
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="22" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M20 9l2.2 5L28 16l-4.5 3.5 1 5L20 23.5l-4.5 1 1-5L12 16l5.8-2z" fill="currentColor" opacity="0.2" />
                  <text x="42" y="20" fontFamily="'Trebuchet MS','Lucida Sans',sans-serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="1.5">NABCEP</text>
                  <text x="42" y="34" fontFamily="'Trebuchet MS','Lucida Sans',sans-serif" fontWeight="400" fontSize="8" fill="currentColor" opacity="0.55" letterSpacing="1">CERTIFIED</text>
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 110 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <text x="8" y="28" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="14" fill="currentColor">BBB</text>
                  <text x="42" y="22" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="22" fill="currentColor">A+</text>
                  <text x="42" y="36" fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" fontSize="8" fill="currentColor" opacity="0.5" letterSpacing="1">RATED</text>
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 110 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="22" r="13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="20" cy="22" r="5" fill="currentColor" opacity="0.12" />
                  <line x1="20" y1="6" x2="20" y2="38" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                  <line x1="4" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                  <text x="42" y="20" fontFamily="'Century Gothic','Avant Garde',sans-serif" fontWeight="700" fontSize="16" fill="currentColor" letterSpacing="1.5">SEIA</text>
                  <text x="42" y="34" fontFamily="'Century Gothic','Avant Garde',sans-serif" fontWeight="300" fontSize="7.5" fill="currentColor" opacity="0.5" letterSpacing="0.5">SOLAR ENERGY</text>
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 155 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="20" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontWeight="300" fontSize="16" fill="currentColor" letterSpacing="4">TESLA</text>
                  <text x="0" y="36" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontWeight="200" fontSize="11" fill="currentColor" opacity="0.6" letterSpacing="2.5">POWERWALL</text>
                  <rect x="128" y="10" width="7" height="24" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
                  <line x1="131.5" y1="14" x2="131.5" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 125 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="22" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M13 22h10M18 17v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <text x="36" y="20" fontFamily="'Gill Sans','Gill Sans MT',sans-serif" fontWeight="600" fontSize="15" fill="currentColor" letterSpacing="0.3">enphase</text>
                  <text x="36" y="34" fontFamily="'Gill Sans','Gill Sans MT',sans-serif" fontWeight="300" fontSize="8" fill="currentColor" opacity="0.5" letterSpacing="1">ENERGY</text>
                </svg>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="18" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="14" fill="currentColor" letterSpacing="1">ENERGY</text>
                  <text x="0" y="36" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="14" fill="currentColor" letterSpacing="1">STAR</text>
                  <path d="M105 11l2 4.2L112 17l-4 3.5 1.2 5L105 23l-4.2 2.5 1.2-5-4-3.5 5-1.8z" fill="currentColor" opacity="0.85" />
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="22" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M20 9l2.2 5L28 16l-4.5 3.5 1 5L20 23.5l-4.5 1 1-5L12 16l5.8-2z" fill="currentColor" opacity="0.2" />
                  <text x="42" y="20" fontFamily="'Trebuchet MS','Lucida Sans',sans-serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="1.5">NABCEP</text>
                  <text x="42" y="34" fontFamily="'Trebuchet MS','Lucida Sans',sans-serif" fontWeight="400" fontSize="8" fill="currentColor" opacity="0.55" letterSpacing="1">CERTIFIED</text>
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 110 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <text x="8" y="28" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="14" fill="currentColor">BBB</text>
                  <text x="42" y="22" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="22" fill="currentColor">A+</text>
                  <text x="42" y="36" fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" fontSize="8" fill="currentColor" opacity="0.5" letterSpacing="1">RATED</text>
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 110 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="22" r="13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="20" cy="22" r="5" fill="currentColor" opacity="0.12" />
                  <line x1="20" y1="6" x2="20" y2="38" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                  <line x1="4" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                  <text x="42" y="20" fontFamily="'Century Gothic','Avant Garde',sans-serif" fontWeight="700" fontSize="16" fill="currentColor" letterSpacing="1.5">SEIA</text>
                  <text x="42" y="34" fontFamily="'Century Gothic','Avant Garde',sans-serif" fontWeight="300" fontSize="7.5" fill="currentColor" opacity="0.5" letterSpacing="0.5">SOLAR ENERGY</text>
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 155 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="20" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontWeight="300" fontSize="16" fill="currentColor" letterSpacing="4">TESLA</text>
                  <text x="0" y="36" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontWeight="200" fontSize="11" fill="currentColor" opacity="0.6" letterSpacing="2.5">POWERWALL</text>
                  <rect x="128" y="10" width="7" height="24" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
                  <line x1="131.5" y1="14" x2="131.5" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
                </svg>
              </div>
              <div className="cert-marquee__logo">
                <svg viewBox="0 0 125 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="22" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M13 22h10M18 17v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <text x="36" y="20" fontFamily="'Gill Sans','Gill Sans MT',sans-serif" fontWeight="600" fontSize="15" fill="currentColor" letterSpacing="0.3">enphase</text>
                  <text x="36" y="34" fontFamily="'Gill Sans','Gill Sans MT',sans-serif" fontWeight="300" fontSize="8" fill="currentColor" opacity="0.5" letterSpacing="1">ENERGY</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="cert-marquee__fade cert-marquee__fade--left" />
          <div className="cert-marquee__fade cert-marquee__fade--right" />
        </div>
      </section>

      {/* ── Solutions Bento Grid ── */}
      <section className="solutions" id="solutions">
        <div className="solutions__inner">
          <div className="solutions__header">
            <span className="label">What We Do</span>
            <h2 className="heading-xl">
              Solar Solutions Built for <em>Your</em> Home
            </h2>
            <p className="subheading">
              Every home is different. We design custom systems that match your energy needs, roof layout, and budget.
            </p>
          </div>
          <div className="bento">
            <div className="bento__card bento__card--large">
              <Image
                src="https://images.pexels.com/photos/7211069/pexels-photo-7211069.jpeg"
                alt="Aerial view of solar panels on rooftop in a European city"
                width="800"
                height="600"
                sizes="(max-width: 1024px) 100vw, 800px"
                loading="lazy"
              />
              <div className="bento__card-content">
                <span className="label label--light">Most Popular</span>
                <h3 className="heading-lg">Residential Solar</h3>
                <p>Custom rooftop systems with net metering.</p>
                <a href="#contact-form" className="btn btn--primary btn--small">
                  Get Started →
                </a>
              </div>
            </div>
            <div className="bento__card">
              <div className="bento__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="heading-md">Commercial Solar</h3>
              <p>Large-scale installations that reduce operating costs.</p>
            </div>
            <div className="bento__card">
              <div className="bento__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="6" width="18" height="12" rx="2" />
                  <line x1="23" y1="13" x2="23" y2="11" />
                </svg>
              </div>
              <h3 className="heading-md">Heat Pumps</h3>
              <p>Energy-efficient heating using renewable energy.</p>
            </div>
            <div className="bento__card">
              <div className="bento__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="heading-md">Battery Storage</h3>
              <p>Store excess solar energy for nighttime use.</p>
            </div>
            <div className="bento__card">
              <div className="bento__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                  <polygon points="12 15 17 21 7 21 12 15" />
                </svg>
              </div>
              <h3 className="heading-md">EV Charging</h3>
              <p>Power your car with your own solar energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats" aria-label="Statistics">
        <div className="stats__noise" />
        <div className="stats__mesh" />
        <div className="stats__waves">
          <div className="stats__wave stats__wave--1" />
          <div className="stats__wave stats__wave--2" />
          <div className="stats__wave stats__wave--3" />
          <div className="stats__wave stats__wave--4" />
          <div className="stats__wave stats__wave--5" />
        </div>
        <div className="stats__inner">
          <div className="stats__item">
            <span className="stats__number" data-count="2400">2,400</span>
            <span className="stats__suffix">+</span>
            <span className="stats__label">Homes Powered</span>
          </div>
          <div className="stats__item">
            <span className="stats__number" data-count="18">18</span>
            <span className="stats__suffix">MW</span>
            <span className="stats__label">Solar Installed</span>
          </div>
          <div className="stats__item">
            <span className="stats__number" data-count="99">99</span>
            <span className="stats__suffix">%</span>
            <span className="stats__label">Satisfaction</span>
          </div>
          <div className="stats__item">
            <span className="stats__number" data-count="14">14</span>
            <span className="stats__suffix"> yrs</span>
            <span className="stats__label">In Business</span>
          </div>
        </div>
      </section>

      {/* ── Shop ── */}
      <section className="shop" id="shop">
        <div className="shop__inner">
          <div className="shop__header">
            <span className="label">Our Products</span>
            <h2 className="heading-xl">Solar Equipment &amp; Accessories</h2>
            <p className="subheading">
              Professional-grade solar products for your home. All products include manufacturer warranty and our installation guarantee.
            </p>
          </div>
          <div className="shop__filters">
            {(["panels", "batteries", "inverters", "chargers", "accessories"] as const).map((f) => (
              <button
                key={f}
                className={`shop__filter${(activeFilter === null && f === "panels") || activeFilter === f ? " active" : ""}`}
                onClick={() => {
                  setActiveFilter(activeFilter === f ? null : f);
                  setShowAllProducts(false);
                }}
              >
                {f === "panels" ? "Solar Panels" : f === "batteries" ? "Batteries" : f === "inverters" ? "Inverters" : f === "chargers" ? "EV Chargers" : "Accessories"}
              </button>
            ))}
          </div>
          <div className="shop__grid" id="shop-grid">
            <noscript>JavaScript is required to browse our product catalog. Please enable JavaScript in your browser.</noscript>
            {visibleProducts.map((p, i) => (
              <article key={p.id} className="product-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="product-card__img">
                  <Image src={p.img} alt={p.name} width="400" height="300" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
                  {p.badge && <span className="product-card__badge">{p.badge}</span>}
                </div>
                <div className="product-card__body">
                  <div className="product-card__category">{p.category}</div>
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.desc}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">${p.price.toLocaleString()}</span>
                    <button
                      data-id={p.id}
                      className={`product-card__add${cart.find((i) => i.id === p.id) ? " added" : ""}`}
                      onClick={() => addToCart(p.id)}
                    >
                      {cart.find((i) => i.id === p.id) ? "In Cart ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {hasMore && (
            <div className="shop__view-more">
              <button className="btn btn--outline btn--large shop__view-more-btn" onClick={() => setShowAllProducts(true)}>
                View All Products <span className="shop__view-more-count">({filteredProducts.length - INITIAL_PRODUCT_COUNT} more)</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          )}
          {showAllProducts && filteredProducts.length > INITIAL_PRODUCT_COUNT && (
            <div className="shop__view-more shop__view-more--collapse">
              <button className="btn btn--outline btn--large shop__view-more-btn" onClick={() => setShowAllProducts(false)}>
                Show Less
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-it-works" id="how-it-works">
        <div className="how-it-works__inner">
          <div className="how-it-works__header">
            <span className="label">Our Process</span>
            <h2 className="heading-xl">From Sunlight to Savings in 4 Steps</h2>
          </div>
          <div className="process-grid">
            {[
              { img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", alt: "Solar energy consultant reviewing home energy usage on tablet", num: "01", title: "Free Assessment", desc: "We analyze your energy usage, roof, and sun exposure." },
              { img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", alt: "Engineer designing custom solar panel layout for residential roof", num: "02", title: "Custom Design", desc: "Tailored system design that maximizes production." },
              { img: "https://images.pexels.com/photos/30285845/pexels-photo-30285845.jpeg", alt: "Technician installing solar panels on rooftop", num: "03", title: "Expert Install", desc: "Certified technicians install in 1-2 days." },
              { img: "https://images.pexels.com/photos/12224996/pexels-photo-12224996.jpeg", alt: "Homeowner monitoring solar energy production on smartphone app", num: "04", title: "Start Saving", desc: "Net metering setup and immediate energy production." },
            ].map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-step__img">
                  <Image src={step.img} alt={step.alt} width="400" height="300" sizes="(max-width: 1024px) 100vw, 400px" loading="lazy" />
                </div>
                <div className="process-step__number">{step.num}</div>
                <h3 className="heading-md">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="results" id="results">
        <div className="results__inner">
          <div className="results__content">
            <span className="label label--dark">Real Results</span>
            <h2 className="heading-xl heading-xl--dark">
              Watch Your Bills <em>Disappear</em>
            </h2>
            <p className="subheading subheading--dark">
              Our average customer saves $1,847 per year. That&apos;s $46,000+ over 25 years.
            </p>
            <div className="results__metrics">
              <div className="results__metric">
                <span className="results__metric-value">85%</span>
                <span className="results__metric-label">Bill reduction</span>
              </div>
              <div className="results__metric">
                <span className="results__metric-value">6.2</span>
                <span className="results__metric-label">Years payback</span>
              </div>
              <div className="results__metric">
                <span className="results__metric-value">25</span>
                <span className="results__metric-label">Year warranty</span>
              </div>
            </div>
            <a href="#contact-form" className="btn btn--accent btn--large">
              See My Savings →
            </a>
          </div>
          <div className="results__visual">
            <Image
              src="https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg"
              alt="Aerial view of solar panel grid on rooftop"
              width="600"
              height="400"
              sizes="(max-width: 1024px) 100vw, 600px"
              loading="lazy"
            />
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60V120H0V60Z" fill="var(--color-surface)" />
          </svg>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="about" id="about">
        <div className="about__noise" />
        <div className="about__inner">
          <div className="about__glimpse">
            <div className="about__glimpse-content">
              <span className="label">About Cosmic Ray</span>
              <h2 className="heading-xl">Powering Homes Since 2012</h2>
              <p className="subheading">
                What started as one engineer&apos;s mission to help a neighbor has grown into a nationwide movement. From a small garage in Sunshine City to 15 states and 2,400+ homes powered — we&apos;re just getting started.
              </p>
              <div className="about__glimpse-stats">
                <div className="about__glimpse-stat">
                  <span className="about__glimpse-stat-num">14+</span>
                  <span className="about__glimpse-stat-label">Years</span>
                </div>
                <div className="about__glimpse-stat">
                  <span className="about__glimpse-stat-num">2,400+</span>
                  <span className="about__glimpse-stat-label">Homes Powered</span>
                </div>
                <div className="about__glimpse-stat">
                  <span className="about__glimpse-stat-num">150+</span>
                  <span className="about__glimpse-stat-label">Team Members</span>
                </div>
              </div>
              <Link href="/about" className="btn btn--primary btn--large about__cta">
                Learn More About Us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
            <div className="about__glimpse-visual">
              <div className="about__glimpse-image-wrap">
                <Image
                  src="https://images.pexels.com/photos/9875444/pexels-photo-9875444.jpeg"
                  alt="Solar technician installing panel on rooftop"
                  width="700"
                  height="500"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  loading="lazy"
                  className="about__glimpse-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing ── */}
      <section className="financing" id="financing">
        <div className="financing__inner">
          <div className="financing__header">
            <span className="label">Flexible Payment Options</span>
            <h2 className="heading-xl">Solar for Every Budget</h2>
            <p className="subheading">Choose the payment plan that works best for you.</p>
          </div>
          <div className="financing__grid">
            <div className="financing__card">
              <h3 className="heading-md">Cash Purchase</h3>
              <div className="financing__price">
                $15,000 <span>avg.</span>
              </div>
              <ul className="financing__list">
                <li>✓ Own your system outright</li>
                <li>✓ Maximum lifetime savings</li>
                <li>✓ 30% federal tax credit</li>
                <li>✓ Increased home value</li>
              </ul>
              <a href="#contact-form" className="btn btn--primary btn--full">
                Get Quote
              </a>
            </div>
            <div className="financing__card financing__card--featured">
              <span className="financing__badge">Most Popular</span>
              <h3 className="heading-md">Solar Loan</h3>
              <div className="financing__price">
                $125 <span>/month</span>
              </div>
              <ul className="financing__list">
                <li>✓ $0 down financing</li>
                <li>✓ Own the system from day one</li>
                <li>✓ Fixed low interest rates</li>
                <li>✓ Monthly savings from day one</li>
              </ul>
              <a href="#contact-form" className="btn btn--primary btn--full">
                Get Quote
              </a>
            </div>
            <div className="financing__card">
              <h3 className="heading-md">Solar Lease</h3>
              <div className="financing__price">
                $99 <span>/month</span>
              </div>
              <ul className="financing__list">
                <li>✓ No upfront cost</li>
                <li>✓ Lower electricity bill</li>
                <li>✓ Maintenance included</li>
                <li>✓ Production guarantee</li>
              </ul>
              <a href="#contact-form" className="btn btn--primary btn--full">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials__inner">
          <div className="testimonials__header">
            <span className="label">Customer Stories</span>
            <h2 className="heading-xl">Trusted by 2,400+ Homeowners</h2>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card testimonial-card--featured">
              <div className="testimonial-card__stars">★★★★★</div>
              <blockquote>&quot;Our electricity bill dropped from $280 to $42 per month. Best investment we&apos;ve ever made.&quot;</blockquote>
              <div className="testimonial-card__author">
                <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Maria Johnson" width="48" height="48" loading="lazy" />
                <div>
                  <strong>Maria Johnson</strong>
                  <span>Austin, TX</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <blockquote>&quot;Cosmic Ray handled everything — permits, HOA approval, net metering. I didn&apos;t lift a finger.&quot;</blockquote>
              <div className="testimonial-card__author">
                <Image src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="Robert Thompson" width="48" height="48" loading="lazy" />
                <div>
                  <strong>Robert Thompson</strong>
                  <span>Denver, CO</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <blockquote>&quot;We went solar last summer. Our system produces more than we use — credits on our bill now!&quot;</blockquote>
              <div className="testimonial-card__author">
                <Image src="https://images.pexels.com/photos/1181516/pexels-photo-1181516.jpeg" alt="Sarah Chen" width="48" height="48" loading="lazy" />
                <div>
                  <strong>Sarah Chen</strong>
                  <span>Phoenix, AZ</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq" id="faq">
        <div className="faq__inner">
          <div className="faq__header">
            <span className="label">Questions &amp; Answers</span>
            <h2 className="heading-xl">Frequently Asked Questions</h2>
          </div>
          <div className="faq__list">
            {faqItems.map((item, i) => (
              <details key={i} className="faq__item" open={i === 0}>
                <summary className="faq__question">
                  {item.q}
                  <span className="faq__icon" />
                </summary>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solar Savings Calculator ── */}
      <section className="calculator" id="calculator">
        <div className="calculator__inner">
          <div className="calculator__header">
            <span className="label">Free Calculator</span>
            <h2 className="heading-xl">How Much Can You Save?</h2>
            <p className="subheading">
              Enter your monthly electricity bill to see your estimated solar savings, system size, and payback period.
            </p>
          </div>
          <div className="calculator__card">
            <div className="calculator__input-group">
              <label htmlFor="calc-bill" className="calculator__label">
                My Monthly Electricity Bill
              </label>
              <div className="calculator__slider-row">
                <span className="calculator__currency">$</span>
                <input
                  type="range"
                  id="calc-bill"
                  className="calculator__slider"
                  min="50"
                  max="800"
                  value={calcBill}
                  step="10"
                  onChange={(e) => setCalcBill(parseInt(e.target.value, 10))}
                />
                <span className="calculator__bill-value" id="calc-bill-value">
                  ${calcBill}
                </span>
              </div>
              <div className="calculator__slider-labels">
                <span>$50</span>
                <span>$800</span>
              </div>
            </div>
            <div className="calculator__results" id="calc-results">
              <div className="calculator__result">
                <span className="calculator__result-value" id="calc-savings">
                  ${yearlySavings.toLocaleString()}
                </span>
                <span className="calculator__result-label">Estimated Yearly Savings</span>
              </div>
              <div className="calculator__result">
                <span className="calculator__result-value" id="calc-size">
                  {systemSizeKw.toFixed(1)} kW
                </span>
                <span className="calculator__result-label">Recommended System Size</span>
              </div>
              <div className="calculator__result">
                <span className="calculator__result-value" id="calc-payback">
                  {paybackYears.toFixed(1)} yrs
                </span>
                <span className="calculator__result-label">Estimated Payback Period</span>
              </div>
              <div className="calculator__result">
                <span className="calculator__result-value" id="calc-25yr">
                  ${twentyFiveYrSavings.toLocaleString()}
                </span>
                <span className="calculator__result-label">25-Year Total Savings</span>
              </div>
            </div>
            <div className="calculator__cta">
              <p className="calculator__disclaimer">
                Estimates based on average U.S. electricity rates and solar production. Your actual savings depend on location, roof orientation, and energy usage.
              </p>
              <a href="#contact-form" className="btn btn--primary btn--large">
                Get Exact Quote for Your Home →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact" id="contact">
        <div className="contact__inner">
          <div className="contact__info">
            <span className="label">Get In Touch</span>
            <h2 className="heading-xl">Let&apos;s Start Your Solar Journey</h2>
            <p className="subheading">
              Fill out the form and our team will contact you within 24 hours.
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+1555123456">(555) 123-4567</a>
                </div>
              </div>
              <div className="contact__detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@cosmicray.com">info@cosmicray.com</a>
                </div>
              </div>
              <div className="contact__detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Address</strong>
                  <span>
                    123 Solar Avenue
                    <br />
                    Sunshine City, CA 90210
                  </span>
                </div>
              </div>
              <div className="contact__detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <strong>Hours</strong>
                  <span>
                    Mon-Fri: 8AM - 6PM
                    <br />
                    Sat: 9AM - 2PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form
            ref={contactFormRef}
            className="contact__form"
            id="contact-form"
            action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`}
            method="POST"
            onSubmit={handleContactSubmit}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Full Name *</label>
              <input type="text" id="contact-name" name="name" required placeholder="John Smith" />
              <span className="form-error" id="name-error" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">Email *</label>
                <input type="email" id="contact-email" name="email" required placeholder="john@email.com" />
                <span className="form-error" id="email-error" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone *</label>
                <input type="tel" id="contact-phone" name="phone" required placeholder="(555) 123-4567" />
                <span className="form-error" id="phone-error" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-service">Service Interest</label>
              <select id="contact-service" name="service">
                <option value="">Select a service...</option>
                <option value="residential">Residential Solar</option>
                <option value="commercial">Commercial Solar</option>
                <option value="battery">Battery Storage</option>
                <option value="ev">EV Charging</option>
                <option value="heatpump">Heat Pumps</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={4} placeholder="Tell us about your energy needs..." />
            </div>
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--large btn--full"
              disabled={contactStatus === "sending"}
            >
              {contactStatus === "sending"
                ? "Sending..."
                : contactStatus === "sent"
                  ? "Message Sent!"
                  : contactStatus === "error"
                    ? "Error — Try Again"
                    : "Send Message"}
            </button>
            <p className="form-disclaimer">
              By submitting this form, you agree to receive calls, texts, and emails from Cosmic Ray Solar. We respect your privacy — your information will never be shared or sold.{" "}
              <a href="/privacy" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <h2 className="heading-xl">Stay Updated</h2>
          <p className="subheading">
            Get the latest solar news, tips, and exclusive offers.
          </p>
          <form
            ref={newsletterFormRef}
            className="newsletter__form"
            id="newsletter-form"
            action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID}`}
            method="POST"
            onSubmit={handleNewsletterSubmit}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input type="email" id="newsletter-email" name="email" placeholder="Enter your email" required />
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
            <button
              type="submit"
              className="btn btn--primary"
              disabled={newsletterStatus === "sending"}
            >
              {newsletterStatus === "sending"
                ? "Subscribing..."
                : newsletterStatus === "sent"
                  ? "Subscribed!"
                  : newsletterStatus === "error"
                    ? "Error — Try Again"
                    : "Subscribe"}
            </button>
          </form>
          <p className="newsletter__disclaimer">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="cta-section">
        <div className="cta-section__noise" />
        <div className="cta-section__inner">
          <h2 className="heading-xl heading-xl--light">Ready to Start Saving?</h2>
          <p className="subheading subheading--light">
            Get a free assessment for your home.
          </p>
          <div className="cta-section__actions">
            <a href="tel:+1555123456" className="btn btn--white btn--large">
              Call (555) 123-4567
            </a>
            <a href="#contact-form" className="btn btn--outline-light btn--large">
              Get My Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
