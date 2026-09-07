"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";

const categories = [
  { name: "All", count: products.length },
  { name: "Panels", count: products.filter((p) => p.category === "panels").length },
  { name: "Batteries", count: products.filter((p) => p.category === "batteries").length },
  { name: "Inverters", count: products.filter((p) => p.category === "inverters").length },
  { name: "Chargers", count: products.filter((p) => p.category === "chargers").length },
  { name: "Accessories", count: products.filter((p) => p.category === "accessories").length },
];

export default function ShopSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active.toLowerCase());
  const featured = products[0];
  const secondary = products[2];

  return (
    <section className="shop" id="shop">
      <div className="shop__inner">
        <div className="shop__header">
          <div className="shop__label-row">
            <span className="label">Shop</span>
            <a href="/shop" className="shop__link">
              View catalog
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
          <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
        </div>

        <div className="shop__split">
          <div className="shop__featured">
            <a href="/shop" className="shop__feat-card">
              <Image src={featured.img} alt={featured.name} width={600} height={400} sizes="50vw" loading="lazy" />
              <div className="shop__feat-overlay" />
              <div className="shop__feat-content">
                <span className="shop__feat-badge">{featured.badge}</span>
                <h3 className="shop__feat-name">{featured.name}</h3>
                <p className="shop__feat-desc">{featured.desc}</p>
                <div className="shop__feat-bottom">
                  <span className="shop__feat-price">${featured.price.toLocaleString()}</span>
                  <span className="shop__feat-btn">View details</span>
                </div>
              </div>
            </a>
          </div>
          <div className="shop__side">
            <a href="/shop" className="shop__side-card">
              <Image src={secondary.img} alt={secondary.name} width={300} height={200} sizes="25vw" loading="lazy" />
              <div className="shop__side-content">
                <span className="shop__side-cat">{secondary.category}</span>
                <h4 className="shop__side-name">{secondary.name}</h4>
                <span className="shop__side-price">${secondary.price.toLocaleString()}</span>
              </div>
            </a>
            <div className="shop__stats">
              <div className="shop__stat">
                <span className="shop__stat-val">20+</span>
                <span className="shop__stat-label">Products</span>
              </div>
              <div className="shop__stat">
                <span className="shop__stat-val">5yr</span>
                <span className="shop__stat-label">Warranty</span>
              </div>
              <div className="shop__stat">
                <span className="shop__stat-val">Free</span>
                <span className="shop__stat-label">Shipping</span>
              </div>
            </div>
          </div>
        </div>

        <div className="shop__cat-nav">
          {categories.map((cat) => (
            <button key={cat.name} type="button" className={`shop__cat-btn${active === cat.name ? " shop__cat-btn--active" : ""}`} onClick={() => setActive(cat.name)}>
              <span className="shop__cat-name">{cat.name}</span>
              <span className="shop__cat-count">{cat.count}</span>
            </button>
          ))}
        </div>

        <div className="shop__products">
          {filtered.slice(0, 8).map((product) => (
            <div className="shop__item" key={product.id}>
              <div className="shop__item-img">
                <Image src={product.img} alt={product.name} width={300} height={225} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" loading="lazy" />
                {product.badge && <span className="shop__item-badge">{product.badge}</span>}
              </div>
              <div className="shop__item-info">
                <span className="shop__item-cat">{product.category}</span>
                <h4 className="shop__item-name">{product.name}</h4>
                <div className="shop__item-row">
                  <span className="shop__item-price">${product.price.toLocaleString()}</span>
                  <button type="button" className="shop__item-add">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop__cta">
          <a href="/shop" className="btn btn--primary btn--large">
            Browse all {products.length} products
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
