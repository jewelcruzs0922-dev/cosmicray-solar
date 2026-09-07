"use client";

import { useRef } from "react";
import Image from "next/image";
import { products } from "@/data/products";

const categories = [
  { name: "Panels", slug: "panels", icon: "☀️" },
  { name: "Batteries", slug: "batteries", icon: "🔋" },
  { name: "Inverters", slug: "inverters", icon: "⚡" },
  { name: "Chargers", slug: "chargers", icon: "🔌" },
  { name: "Accessories", slug: "accessories", icon: "🛠️" },
];

const featured = products.slice(0, 4);

function TiltCard({ product }: { product: typeof products[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className="shop-tilt"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="shop-tilt__img">
        <Image src={product.img} alt={product.name} width={300} height={200} sizes="(max-width: 640px) 100vw, 25vw" loading="lazy" />
        {product.badge && <span className="shop-tilt__badge">{product.badge}</span>}
      </div>
      <div className="shop-tilt__body">
        <span className="shop-tilt__cat">{product.category}</span>
        <h3 className="shop-tilt__name">{product.name}</h3>
        <div className="shop-tilt__footer">
          <span className="shop-tilt__price">${product.price.toLocaleString()}</span>
          <button type="button" className="shop-tilt__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ShopSection() {
  return (
    <section className="shop" id="shop">
      <div className="shop__bg-glow" aria-hidden="true" />
      <div className="shop__inner">
        <div className="shop__header">
          <span className="label">Shop</span>
          <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
          <p className="subheading">Professional-grade equipment from trusted manufacturers.</p>
        </div>

        <div className="shop__grid">
          {featured.map((product) => (
            <TiltCard key={product.id} product={product} />
          ))}
        </div>

        <div className="shop__categories">
          {categories.map((cat) => (
            <a key={cat.slug} href={`/shop/${cat.slug}`} className="shop-cat">
              <span className="shop-cat__icon">{cat.icon}</span>
              <span className="shop-cat__name">{cat.name}</span>
              <svg className="shop-cat__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
