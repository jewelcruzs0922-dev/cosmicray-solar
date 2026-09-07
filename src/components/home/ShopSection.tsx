"use client";

import { useRef } from "react";
import Image from "next/image";
import { products } from "@/data/products";

const featured = products.slice(0, 5);

export default function ShopSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === "right" ? w : -w, behavior: "smooth" });
  };

  return (
    <section className="shop" id="shop">
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
            <div className="shop__slide" key={p.id}>
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
                  <button type="button" className="shop__slide-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
