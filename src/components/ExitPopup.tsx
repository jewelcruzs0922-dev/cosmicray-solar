"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("cr-exit-popup-seen", "true");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("cr-exit-popup-seen")) return;

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 5 && !e.relatedTarget && !dismissed) {
        setVisible(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [dismissed]);

  useEffect(() => {
    if (!visible) return;

    const card = cardRef.current;
    if (!card) return;

    // Focus the close button when popup opens
    const closeButton = card.querySelector<HTMLButtonElement>(".exit-popup__close");
    closeButton?.focus();

    // Focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const focusableElements = card.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, close]);

  return (
    <div
      className={`exit-popup${visible ? " visible" : ""}`}
      role="dialog"
      aria-label="Special offer"
      aria-hidden={!visible}
      aria-modal="true"
    >
      <div className="exit-popup__overlay" onClick={close} />
      <div className="exit-popup__card" ref={cardRef}>
        <button
          className="exit-popup__close"
          type="button"
          aria-label="Close popup"
          onClick={close}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <span className="exit-popup__badge">Limited Time Offer</span>
        <h3 className="exit-popup__title">
          Get a Free Solar Assessment
        </h3>
        <p className="exit-popup__text">
          See how much you could save with solar. Our team will analyze your
          roof, energy usage, and local incentives — 100% free, no obligation.
        </p>

        <div className="exit-popup__stats">
          <div className="exit-popup__stat">
            <strong>$1,847</strong>
            <span>Avg. Yearly Savings</span>
          </div>
          <div className="exit-popup__stat">
            <strong>30%</strong>
            <span>Federal Tax Credit</span>
          </div>
          <div className="exit-popup__stat">
            <strong>6.2 yrs</strong>
            <span>Avg. Payback</span>
          </div>
        </div>

        <Link href="/#contact-form" className="btn btn--primary btn--large btn--full">
          Claim My Free Assessment
        </Link>
        <p className="exit-popup__fine">
          No spam. No sharing your info. Just a free, honest assessment.
        </p>
      </div>
    </div>
  );
}
