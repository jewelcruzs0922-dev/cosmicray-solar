"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchablePages } from "@/data/searchablePages";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [open]);

  const results = query.length >= 2
    ? searchablePages.filter(
        (p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="search-overlay" aria-hidden={!open} role="dialog" aria-label="Search" aria-modal="true">
      <div className="search-overlay__inner">
        <button className="search-overlay__close" type="button" aria-label="Close search" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <form
          className="search-overlay__form"
          onSubmit={(e) => {
            e.preventDefault();
            if (results.length > 0) {
              router.push(results[0].href);
              onClose();
            }
          }}
        >
          <input
            type="search"
            name="search"
            placeholder="Search products, services..."
            aria-label="Search"
            autoComplete="off"
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn--primary" type="submit">Search</button>
        </form>
        <div className="search-overlay__results">
          {results.length > 0 && (
            <ul className="search-results-list">
              {results.map((r) => (
                <li key={r.href} className="search-results-list__item">
                  <Link href={r.href} className="search-results-list__link" onClick={onClose}>
                    <strong className="search-results-list__title">{r.title}</strong>
                    <span className="search-results-list__desc">{r.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {query.length >= 2 && results.length === 0 && (
            <p className="search-results-empty">No results found for &ldquo;{query}&rdquo;</p>
          )}
        </div>
      </div>
    </div>
  );
}
