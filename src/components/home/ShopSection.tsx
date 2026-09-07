"use client";

import { useState } from "react";
import Image from "next/image";
import { products, type Product } from "@/data/products";

const categories = ["all", "panels", "batteries", "inverters", "chargers", "accessories"] as const;

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <Image src={product.img} alt={product.name} width={400} height={300} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.desc}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toLocaleString()}</span>
          <button type="button" className="product-card__add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ShopSection() {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section className="shop" id="shop">
      <div className="shop__inner">
        <div className="shop__header">
          <span className="label">Shop</span>
          <h2 className="heading-xl">Solar products for <em>your</em> home</h2>
          <p className="subheading">Professional-grade equipment from trusted manufacturers.</p>
        </div>
        <div className="shop__filters">
          {categories.map((cat) => (
            <button key={cat} type="button" className={`shop__filter${active === cat ? " shop__filter--active" : ""}`} onClick={() => setActive(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="shop__grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
