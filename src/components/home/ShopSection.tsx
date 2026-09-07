"use client";

import { useRef } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/components/CartContext";

const featured = products.slice(0, 5);

const colors = [
  { gradient: "linear-gradient(135deg, rgba(232,168,56,0.12) 0%, rgba(232,168,56,0.03) 100%)", accent: "#e8a838", border: "rgba(232,168,56,0.2)" },
  { gradient: "linear-gradient(135deg, rgba(10,61,47,0.10) 0%, rgba(10,61,47,0.02) 100%)", accent: "#0a3d2f", border: "rgba(10,61,47,0.15)" },
  { gradient: "linear-gradient(135deg, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.02) 100%)", accent: "#3b82f6", border: "rgba(59,130,246,0.15)" },
  { gradient: "linear-gradient(135deg, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.02) 100%)", accent: "#f97316", border: "rgba(249,115,22,0.15)" },
  { gradient: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(139,92,246,0.02) 100%)", accent: "#8b5cf6", border: "rgba(139,92,246,0.15)" },
];

export default function ShopSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === "right" ? w : -w, behavior: "smooth" });
  };

  return (
    <section className="shop" id="shop">
      <div className="shop__bg-deco shop__bg-deco--1" aria-hidden="true" />
      <div className="shop__bg-deco shop__bg-deco--2" aria-hidden="true" />
      <div className="shop__bg-deco shop__bg-deco--3" aria-hidden="true" />
      <div className="shop__bg-lines" aria-hidden="true" />
      <div className="shop__inner">
        <div className="shop__top">
          <div>
            <span className="label">Shop</span>
            <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
          </div>
          <div className="shop__nav">
            <button type="button" className="shop__arrow" onClick={() => scroll("left")} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            </button>
            <button type="button" className="shop__arrow" onClick={() => scroll("right")} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
            <a href="/shop" className="shop__view-all">View all &rarr;</a>
          </div>
        </div>

        <div className="shop__carousel" ref={scrollRef}>
          {featured.map((p, i) => (
            <div className="shop__slide" key={p.id} style={{ background: colors[i].gradient, border: `1px solid ${colors[i].border}`, "--slide-accent": colors[i].accent } as React.CSSProperties}>
              <div className="shop__slide-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="shop__slide-img">
                <Image src={p.img} alt={p.name} width={400} height={300} sizes="40vw" loading="lazy" />
                {p.badge && <span className="shop__slide-badge">{p.badge}</span>}
              </div>
              <div className="shop__slide-info">
                <span className="shop__slide-cat">{p.category}</span>
                <h3 className="shop__slide-name">{p.name}</h3>
                <p className="shop__slide-desc">{p.desc}</p>
                <div className="shop__slide-bottom">
                  <span className="shop__slide-price">${p.price.toLocaleString()}</span>
                  <button type="button" className="shop__slide-btn" onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, img: p.img, category: p.category })}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
