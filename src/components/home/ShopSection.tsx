"use client";

import { useRef } from "react";
import Image from "next/image";
import { products } from "@/data/products";

const categories = [
  { name: "Panels", slug: "panels", color: "#e8a838" },
  { name: "Batteries", slug: "batteries", color: "#16a34a" },
  { name: "Inverters", slug: "inverters", color: "#3b82f6" },
  { name: "Chargers", slug: "chargers", color: "#f97316" },
  { name: "Accessories", slug: "accessories", color: "#8b5cf6" },
];

const featured = products[0];
const secondary = products[2];
const strip = products.slice(3, 11);

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "";
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    }
  };

  return (
    <div
      ref={cardRef}
      className="spc"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="spc__shine" />
      <div className="spc__img">
        <Image src={product.img} alt={product.name} width={400} height={300} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
        {product.badge && <span className="spc__badge">{product.badge}</span>}
      </div>
      <div className="spc__body">
        <span className="spc__cat">{product.category}</span>
        <h3 className="spc__name">{product.name}</h3>
        <div className="spc__bottom">
          <span className="spc__price">${product.price.toLocaleString()}</span>
          <button type="button" className="spc__cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopSection() {
  return (
    <section className="shop" id="shop">
      <div className="shop__noise" aria-hidden="true" />
      <div className="shop__glow shop__glow--1" aria-hidden="true" />
      <div className="shop__glow shop__glow--2" aria-hidden="true" />

      <div className="shop__inner">
        <div className="shop__top">
          <div className="shop__text">
            <span className="label label--accent">Shop</span>
            <h2 className="shop__title">Equip your home<br />with <em>solar</em></h2>
          </div>
          <div className="shop__cats">
            {categories.map((cat) => (
              <a key={cat.slug} href={`/shop/${cat.slug}`} className="shop__cat" style={{ "--cat-color": cat.color } as React.CSSProperties}>
                <span className="shop__cat-dot" />
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        <div className="shop__hero">
          <div className="shop__hero-card">
            <Image src={featured.img} alt={featured.name} width={600} height={400} sizes="50vw" loading="lazy" />
            <div className="shop__hero-overlay" />
            <div className="shop__hero-content">
              <span className="shop__hero-badge">{featured.badge}</span>
              <h3 className="shop__hero-name">{featured.name}</h3>
              <p className="shop__hero-desc">{featured.desc}</p>
              <div className="shop__hero-bottom">
                <span className="shop__hero-price">${featured.price.toLocaleString()}</span>
                <button type="button" className="btn btn--accent btn--small">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="shop__hero-side">
            <div className="shop__side-card">
              <Image src={secondary.img} alt={secondary.name} width={300} height={200} sizes="25vw" loading="lazy" />
              <div className="shop__side-content">
                <span className="spc__cat">{secondary.category}</span>
                <h4 className="shop__side-name">{secondary.name}</h4>
                <span className="shop__side-price">${secondary.price.toLocaleString()}</span>
              </div>
            </div>
            <div className="shop__stat-strip">
              <div className="shop__stat">
                <span className="shop__stat-num">20+</span>
                <span className="shop__stat-label">Products</span>
              </div>
              <div className="shop__stat">
                <span className="shop__stat-num">5</span>
                <span className="shop__stat-label">Categories</span>
              </div>
              <div className="shop__stat">
                <span className="shop__stat-num">Free</span>
                <span className="shop__stat-label">Shipping</span>
              </div>
            </div>
          </div>
        </div>

        <div className="shop__strip">
          <div className="shop__strip-track">
            {strip.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>

        <div className="shop__bottom">
          <div className="shop__bottom-inner">
            <div className="shop__bottom-left">
              <h3 className="shop__bottom-title">Browse our full catalog</h3>
              <p className="shop__bottom-desc">{products.length} products across 5 categories. Free shipping on all orders. 30-day returns.</p>
            </div>
            <a href="/shop" className="btn btn--accent btn--large">
              View all products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
