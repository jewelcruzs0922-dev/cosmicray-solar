"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";

const cats = ["All", "Panels", "Batteries", "Inverters", "Chargers", "Accessories"];

export default function ShopSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products.slice(0, 6) : products.filter((p) => p.category === active.toLowerCase()).slice(0, 6);

  return (
    <section className="shop" id="shop">
      <div className="shop__inner">
        <div className="shop__head">
          <span className="label">Shop</span>
          <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
        </div>

        <div className="shop__tabs">
          {cats.map((cat) => (
            <button key={cat} type="button" className={`shop__tab${active === cat ? " shop__tab--on" : ""}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="shop__gallery">
          {filtered.map((p) => (
            <a href="/shop" className="shop__card" key={p.id}>
              <div className="shop__card-img">
                <Image src={p.img} alt={p.name} width={400} height={500} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                {p.badge && <span className="shop__card-badge">{p.badge}</span>}
              </div>
              <div className="shop__card-info">
                <span className="shop__card-cat">{p.category}</span>
                <h3 className="shop__card-name">{p.name}</h3>
                <span className="shop__card-price">${p.price.toLocaleString()}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="shop__foot">
          <a href="/shop" className="shop__foot-link">
            View all {products.length} products
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
