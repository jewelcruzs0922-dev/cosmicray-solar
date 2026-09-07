"use client";

import { useState } from "react";
import Image from "next/image";
import { products, type Product } from "@/data/products";

const categories = ["all", "panels", "batteries", "inverters", "chargers", "accessories"] as const;

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="shop-page-card">
      <div className="shop-page-card__img">
        <Image src={product.img} alt={product.name} width={400} height={300} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
        {product.badge && <span className="shop-page-card__badge">{product.badge}</span>}
      </div>
      <div className="shop-page-card__body">
        <span className="shop-page-card__cat">{product.category}</span>
        <h3 className="shop-page-card__name">{product.name}</h3>
        <p className="shop-page-card__desc">{product.desc}</p>
        <div className="shop-page-card__footer">
          <span className="shop-page-card__price">${product.price.toLocaleString()}</span>
          <button type="button" className="btn btn--primary btn--small">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ShopPageClient() {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section className="shop-page">
      <div className="shop-page__hero">
        <h1 className="shop-page__title">Solar Products</h1>
        <p className="shop-page__sub">Professional-grade equipment from trusted manufacturers.</p>
      </div>
      <div className="shop-page__inner">
        <div className="shop-page__filters">
          {categories.map((cat) => (
            <button key={cat} type="button" className={`shop-page__filter${active === cat ? " shop-page__filter--active" : ""}`} onClick={() => setActive(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="shop-page__grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
