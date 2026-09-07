"use client";

import { useRef } from "react";
import Image from "next/image";
import { products } from "@/data/products";

function TiltCard({ product, size = "sm" }: { product: typeof products[0]; size?: "lg" | "sm" }) {
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
      className={`shop-tilt shop-tilt--${size}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="shop-tilt__img">
        <Image src={product.img} alt={product.name} width={size === "lg" ? 600 : 300} height={size === "lg" ? 400 : 200} sizes={size === "lg" ? "50vw" : "25vw"} loading="lazy" />
        {product.badge && <span className="shop-tilt__badge">{product.badge}</span>}
      </div>
      <div className="shop-tilt__body">
        <span className="shop-tilt__cat">{product.category}</span>
        <h3 className="shop-tilt__name">{product.name}</h3>
        {size === "lg" && <p className="shop-tilt__desc">{product.desc}</p>}
        <div className="shop-tilt__footer">
          <span className="shop-tilt__price">${product.price.toLocaleString()}</span>
          <button type="button" className="shop-tilt__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ShopSection() {
  const featured = products[0];
  const second = products[2];
  const scrollProducts = products.slice(3, 11);

  return (
    <section className="shop" id="shop">
      <div className="shop__bg-glow" aria-hidden="true" />
      <div className="shop__inner">
        <div className="shop__header">
          <span className="label">Shop</span>
          <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
          <p className="subheading">Professional-grade equipment from trusted manufacturers.</p>
        </div>

        <div className="shop__hero-row">
          <TiltCard product={featured} size="lg" />
          <TiltCard product={second} size="lg" />
        </div>

        <div className="shop__scroll-strip">
          <div className="shop__scroll-track">
            {scrollProducts.map((p) => (
              <TiltCard key={p.id} product={p} size="sm" />
            ))}
          </div>
        </div>

        <div className="shop__cta">
          <a href="/shop" className="btn btn--primary btn--large">View all products &rarr;</a>
        </div>
      </div>
    </section>
  );
}
