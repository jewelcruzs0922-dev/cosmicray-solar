"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link href="/" className="footer__logo" onClick={scrollToTop}>
            <svg
              className="footer__logo-icon"
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="48" fill="#0a3d2f" />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#e8a838"
                strokeWidth="2"
                strokeDasharray="4 6"
                opacity="0.4"
              />
              <path
                d="M50 15 L55 35 L75 30 L60 45 L80 50 L60 55 L75 70 L55 65 L50 85 L45 65 L25 70 L40 55 L20 50 L40 45 L25 30 L45 35 Z"
                fill="#e8a838"
                opacity="0.9"
              />
              <circle cx="50" cy="50" r="12" fill="#0a3d2f" />
              <text
                x="50"
                y="56"
                textAnchor="middle"
                fill="white"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="700"
                fontSize="16"
              >
                CR
              </text>
            </svg>
            <span>COSMIC RAY</span>
          </Link>
          <p>
            Powering homes with clean, renewable solar energy since 2012.
          </p>
          <div className="footer__social">
            <a href="https://www.facebook.com/cosmicraysolar" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/cosmicraysolar" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/cosmicraysolar" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@cosmicraysolar" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/#solutions">Residential Solar</Link></li>
              <li><Link href="/#solutions">Commercial Solar</Link></li>
              <li><Link href="/#solutions">Battery Storage</Link></li>
              <li><Link href="/#solutions">EV Charging</Link></li>
              <li><Link href="/#solutions">Heat Pumps</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/service-areas">Service Areas</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#calculator">Savings Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#how-it-works">Our Process</Link></li>
              <li><Link href="/#financing">Financing</Link></li>
              <li><Link href="/#testimonials">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+1555123456">(555) 123-4567</a></li>
              <li><a href="mailto:info@cosmicray.com">info@cosmicray.com</a></li>
              <li>123 Solar Avenue<br />Sunshine City, CA 90210</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2012–2026 Cosmic Ray Solar. All rights reserved. CA License #SLC-847291</p>
        <div className="footer__legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
