"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

const searchablePages = [
  { title: "Home", href: "/", desc: "Solar energy solutions for your home" },
  { title: "About Us", href: "/about", desc: "Our story, mission, and team" },
  { title: "Contact", href: "/contact", desc: "Get in touch for a free quote" },
  { title: "Financing", href: "/financing", desc: "Solar financing options" },
  { title: "Blog", href: "/blog", desc: "Solar insights and guides" },
  { title: "Case Studies", href: "/case-studies", desc: "Real results from real homes" },
  { title: "Service Areas", href: "/service-areas", desc: "We serve 15 states" },
  { title: "Solar Cost Guide", href: "/blog/solar-cost-guide", desc: "How much do solar panels cost?" },
  { title: "Battery Storage Guide", href: "/blog/battery-storage-guide", desc: "Home battery storage pros and cons" },
  { title: "Solar Tax Credits", href: "/blog/solar-tax-credits", desc: "30% federal tax credit info" },
  { title: "EV Charging Guide", href: "/blog/ev-charging-guide", desc: "Charge your EV with solar" },
  { title: "Los Angeles", href: "/service-areas/los-angeles", desc: "Solar installation in LA" },
  { title: "San Diego", href: "/service-areas/san-diego", desc: "Solar installation in San Diego" },
  { title: "Phoenix", href: "/service-areas/phoenix", desc: "Solar installation in Phoenix" },
  { title: "Denver", href: "/service-areas/denver", desc: "Solar installation in Denver" },
  { title: "Austin", href: "/service-areas/austin", desc: "Solar installation in Austin" },
  { title: "Miami", href: "/service-areas/miami", desc: "Solar installation in Miami" },
];

export default function Header() {
  const { cart, cartCount, cartTotal, updateQty, removeFromCart, clearCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchablePages>([]);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setCartOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isOpen = mobileOpen || searchOpen || cartOpen;
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace("-", "") || "0", 10));
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileOpen, searchOpen, cartOpen]);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchInputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  return (
    <>
      <header
        className="header"
        style={scrolled ? { boxShadow: "var(--shadow-md)" } : undefined}
      >
        <div className="header__inner">
          <Link href="/" className="header__logo" onClick={() => { closeAll(); window.scrollTo({ top: 0, behavior: "instant" }); }}>
            <svg
              className="header__logo-icon"
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="48" fill="#0a3d2f"/>
              <circle cx="50" cy="50" r="38" fill="none" stroke="#e8a838" strokeWidth="2" strokeDasharray="4 6" opacity="0.4"/>
              <path d="M50 15 L55 35 L75 30 L60 45 L80 50 L60 55 L75 70 L55 65 L50 85 L45 65 L25 70 L40 55 L20 50 L40 45 L25 30 L45 35 Z" fill="#e8a838" opacity="0.9"/>
              <circle cx="50" cy="50" r="12" fill="#0a3d2f"/>
              <text x="50" y="56" textAnchor="middle" fill="white" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16">CR</text>
            </svg>
            <span className="header__logo-text">COSMIC RAY</span>
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              <li>
                <Link href="/#solutions">Solutions</Link>
              </li>
              <li className="nav-dropdown">
                <button type="button" aria-expanded={false} aria-haspopup="true">Resources</button>
                <div className="nav-dropdown__menu" role="menu">
                  <Link href="/case-studies" role="menuitem">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span>
                      Case Studies
                      <br />
                      Real results from real homes
                    </span>
                  </Link>
                  <Link href="/service-areas" role="menuitem">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>
                      Service Areas
                      <br />
                      We serve 15 states
                    </span>
                  </Link>
                  <Link href="/#faq" role="menuitem">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>
                      FAQ
                      <br />
                      Common questions answered
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>

          <div className="header__right">
            <button
              className="header__search-btn"
              type="button"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <a href="tel:+1555123456" className="header__phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (555) 123-4567
            </a>

            <button
              className="header__cart-btn"
              type="button"
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="header__cart-count" aria-label={`${cartCount} items in cart`}>
                {cartCount}
              </span>
            </button>

            <Link
              href="/#contact-form"
              className="btn btn--primary header__cta"
              onClick={(e) => {
                e.preventDefault();
                closeAll();
                const target = document.querySelector("#contact-form");
                if (target) {
                  const headerH = 72;
                  const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
                  window.scrollTo({ top, behavior: "smooth" });
                  history.replaceState(null, "", "/#contact-form");
                } else {
                  window.location.href = "/#contact-form";
                }
              }}
            >
              Get Free Quote
            </Link>

            <button
              className="header__burger"
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Nav ── */}
      <div
        className="mobile-nav"
        aria-hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        <form
          className="mobile-nav__search"
          onSubmit={() => { setSearchOpen(true); setMobileOpen(false); }}
        >
          <input
            className="mobile-nav__search-input"
            type="search"
            name="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button type="submit" aria-label="Submit search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <nav aria-label="Mobile">
          <ul className="mobile-nav__list">
            <li>
              <Link href="/#solutions" onClick={closeAll}>Solutions</Link>
            </li>
            <li>
              <Link href="/case-studies" onClick={closeAll}>Case Studies</Link>
            </li>
            <li>
              <Link href="/service-areas" onClick={closeAll}>Service Areas</Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeAll}>Blog</Link>
            </li>
            <li>
              <Link href="/about" onClick={closeAll}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeAll}>Contact</Link>
            </li>
            <li>
              <Link href="/financing" onClick={closeAll}>Financing</Link>
            </li>
            <li>
              <Link
                href="/#contact-form"
                className="btn btn--primary btn--full"
                onClick={(e) => {
                  e.preventDefault();
                  closeAll();
                  const target = document.querySelector("#contact-form");
                  if (target) {
                    const headerH = 72;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
                    window.scrollTo({ top, behavior: "smooth" });
                    history.replaceState(null, "", "/#contact-form");
                  } else {
                    window.location.href = "/#contact-form";
                  }
                }}
              >
                Get Free Quote
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-nav__footer">
          <a href="tel:+1555123456">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (555) 123-4567
          </a>
          <a href="mailto:info@cosmicray.com">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            info@cosmicray.com
          </a>
        </div>
      </div>

      {/* ── Search Overlay ── */}
      <div
        className="search-overlay"
        aria-hidden={!searchOpen}
        role="dialog"
        aria-label="Search"
      >
        <div className="search-overlay__inner">
          <button
            className="search-overlay__close"
            type="button"
            aria-label="Close search"
            onClick={() => { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <form
            className="search-overlay__form"
            id="search-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchResults.length > 0) {
                window.location.href = searchResults[0].href;
                setSearchOpen(false);
                setSearchQuery("");
                setSearchResults([]);
              }
            }}
          >
            <input
              type="search"
              name="search"
              placeholder="Search products, services..."
              aria-label="Search"
              id="search-input"
              autoComplete="off"
              ref={searchInputRef}
              value={searchQuery}
              onChange={(e) => {
                const q = e.target.value;
                setSearchQuery(q);
                if (q.length >= 2) {
                  const lower = q.toLowerCase();
                  setSearchResults(
                    searchablePages.filter(
                      (p) =>
                        p.title.toLowerCase().includes(lower) ||
                        p.desc.toLowerCase().includes(lower)
                    )
                  );
                } else {
                  setSearchResults([]);
                }
              }}
            />
            <button className="btn btn--primary" type="submit">
              Search
            </button>
          </form>
          <div className="search-overlay__results">
            {searchResults.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {searchResults.map((r) => (
                  <li key={r.href} style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <Link
                      href={r.href}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }}
                      style={{ display: "block", padding: "var(--space-4) var(--space-5)", transition: "background 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-surface)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                    >
                      <strong style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--color-heading)" }}>{r.title}</strong>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{r.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <p style={{ textAlign: "center", padding: "var(--space-8)", color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>
                No results found for &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Cart Overlay ── */}
      <div
        className="cart-overlay"
        aria-hidden={!cartOpen}
        onClick={() => setCartOpen(false)}
      />

      {/* ── Cart Sidebar ── */}
      <aside
        className="cart-sidebar"
        aria-hidden={!cartOpen}
        aria-label="Shopping cart"
        role="dialog"
      >
        <div className="cart-sidebar__header">
          <h2>Your Cart</h2>
          <button
            className="cart-sidebar__close"
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar__items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Your cart is empty</p>
              <button
                className="btn btn--primary btn--small"
                type="button"
                onClick={() => setCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-item__img" src={item.img} alt={item.name} width="64" height="64" />
                <div className="cart-item__info">
                  <div className="cart-item__name">{item.name}</div>
                  <div className="cart-item__price">${item.price.toLocaleString()}</div>
                  <div className="cart-item__qty">
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <div className="cart-item__remove" onClick={() => removeFromCart(item.id)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") removeFromCart(item.id); }}>Remove</div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__total">
              <span>Total</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <Link href="/#contact-form" className="btn btn--primary btn--full" id="checkout-btn">Proceed to Checkout</Link>
            <button className="btn btn--ghost btn--full" onClick={clearCart}>Clear Cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
