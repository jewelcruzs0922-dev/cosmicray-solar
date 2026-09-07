"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileNav({ open, onClose, onOpenSearch }: MobileNavProps) {
  const router = useRouter();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    const target = document.querySelector("#contact-form");
    if (target) {
      const headerH = 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", "/#contact-form");
    } else {
      router.push("/#contact-form");
    }
  };

  return (
    <div className="mobile-nav" aria-hidden={!open} aria-label="Mobile navigation" role="dialog" aria-modal="true">
      <form className="mobile-nav__search" onSubmit={(e) => { e.preventDefault(); onOpenSearch(); onClose(); }}>
        <input className="mobile-nav__search-input" type="search" name="search" placeholder="Search..." aria-label="Search" />
        <button type="submit" aria-label="Submit search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>

      <nav aria-label="Mobile">
        <ul className="mobile-nav__list">
          <li><Link href="/#solutions" onClick={onClose}>Solutions</Link></li>
          <li><Link href="/case-studies" onClick={onClose}>Case Studies</Link></li>
          <li><Link href="/service-areas" onClick={onClose}>Service Areas</Link></li>
          <li><Link href="/blog" onClick={onClose}>Blog</Link></li>
          <li><Link href="/about" onClick={onClose}>About</Link></li>
          <li><Link href="/contact" onClick={onClose}>Contact</Link></li>
          <li><Link href="/financing" onClick={onClose}>Financing</Link></li>
          <li>
            <Link href="/#contact-form" className="btn btn--primary btn--full" onClick={handleQuoteClick}>
              Get Free Quote
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mobile-nav__footer">
        <a href={`tel:${PHONE_LINK}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {PHONE}
        </a>
        <a href={`mailto:${EMAIL}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
