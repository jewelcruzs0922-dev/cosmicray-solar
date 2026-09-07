"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { useToast } from "@/components/Toast";
import { products } from "@/data/products";

const INITIAL_COUNT = 4;

export default function ShopSection() {
  const { cart, addToCart: cartAddToCart } = useCart();
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const addToCart = useCallback((productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    cartAddToCart({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1, category: product.category });
    showToast(product.name + " added to cart");
  }, [cartAddToCart, showToast]);

  const filtered = activeFilter === null ? products : products.filter((p) => p.category === activeFilter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <section className="shop" id="shop">
      <div className="shop__inner">
        <div className="shop__header">
          <span className="label">Our Products</span>
          <h2 className="heading-xl">Solar Equipment &amp; Accessories</h2>
          <p className="subheading">Professional-grade solar products for your home. All products include manufacturer warranty and our installation guarantee.</p>
        </div>
        <div className="shop__filters">
          {(["panels", "batteries", "inverters", "chargers", "accessories"] as const).map((f) => (
            <button key={f} className={`shop__filter${(activeFilter === null && f === "panels") || activeFilter === f ? " active" : ""}`}
              onClick={() => { setActiveFilter(activeFilter === f ? null : f); setShowAll(false); }}>
              {f === "panels" ? "Solar Panels" : f === "batteries" ? "Batteries" : f === "inverters" ? "Inverters" : f === "chargers" ? "EV Chargers" : "Accessories"}
            </button>
          ))}
        </div>
        <div className="shop__grid" id="shop-grid">
          {visible.map((p, i) => (
            <article key={p.id} className="product-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="product-card__img">
                <Image src={p.img} alt={p.name} width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" />
                {p.badge && <span className="product-card__badge">{p.badge}</span>}
              </div>
              <div className="product-card__body">
                <div className="product-card__category">{p.category}</div>
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">${p.price.toLocaleString()}</span>
                  <button className={`product-card__add${cart.find((item) => item.id === p.id) ? " added" : ""}`} onClick={() => addToCart(p.id)}>
                    {cart.find((item) => item.id === p.id) ? "In Cart \u2713" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {hasMore && (
          <div className="shop__view-more">
            <button className="btn btn--outline btn--large shop__view-more-btn" onClick={() => setShowAll(true)}>
              View All Products <span className="shop__view-more-count">({filtered.length - INITIAL_COUNT} more)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
          </div>
        )}
        {showAll && filtered.length > INITIAL_COUNT && (
          <div className="shop__view-more shop__view-more--collapse">
            <button className="btn btn--outline btn--large shop__view-more-btn" onClick={() => setShowAll(false)}>
              Show Less
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15" /></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
