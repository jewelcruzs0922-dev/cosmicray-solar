"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";

const categories = ["All", "Panels", "Batteries", "Inverters", "Chargers", "Accessories"] as const;

export default function ShopSection() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products.slice(0, 8) : products.filter((p) => p.category === active.toLowerCase()).slice(0, 8);

  return (
    <section className="shop" id="shop">
      <div className="shop__inner">
        <div className="shop__header">
          <div className="shop__header-left">
            <span className="label">Shop</span>
            <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
          </div>
          <a href="/shop" className="shop__view-all">
            View all {products.length} products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>

        <div className="shop__filters">
          {categories.map((cat) => (
            <button key={cat} type="button" className={`shop__filter${active === cat ? " shop__filter--active" : ""}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="shop__grid">
          {filtered.map((product) => (
            <div className="shop-card" key={product.id}>
              <div className="shop-card__img">
                <Image src={product.img} alt={product.name} width={400} height={300} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
                {product.badge && <span className="shop-card__badge">{product.badge}</span>}
              </div>
              <div className="shop-card__body">
                <span className="shop-card__cat">{product.category}</span>
                <h3 className="shop-card__name">{product.name}</h3>
                <p className="shop-card__desc">{product.desc}</p>
                <div className="shop-card__footer">
                  <span className="shop-card__price">${product.price.toLocaleString()}</span>
                  <button type="button" className="shop-card__add">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop__trust">
          <div className="shop__trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            <div>
              <strong>25-Year Warranty</strong>
              <span>On all solar panels</span>
            </div>
          </div>
          <div className="shop__trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            <div>
              <strong>Free Shipping</strong>
              <span>On orders over $500</span>
            </div>
          </div>
          <div className="shop__trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <div>
              <strong>Certified Equipment</strong>
              <span>UL Listed &amp; MCS Approved</span>
            </div>
          </div>
          <div className="shop__trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            <div>
              <strong>Expert Support</strong>
              <span>Real humans, not bots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
