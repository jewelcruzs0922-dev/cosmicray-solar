"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const handleAccept = useCallback(() => {
    localStorage.setItem("cr-cookie-consent", "accepted");
    setVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem("cr-cookie-consent", "declined");
    setVisible(false);
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("cr-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
        firstButtonRef.current?.focus();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDecline();
    };
    document.addEventListener("keydown", handleEscape);

    const banner = bannerRef.current;
    if (!banner) return () => document.removeEventListener("keydown", handleEscape);

    const focusableElements = banner.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
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
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [visible, handleDecline]);

  return (
    <div
      ref={bannerRef}
      className={`cookie-banner${visible ? " visible" : ""}`}
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          We use cookies to improve your experience and analyze site traffic. By
          clicking &quot;Accept,&quot; you consent to our use of cookies.{" "}
          <a href="/privacy">Learn more</a>
        </p>
        <div className="cookie-banner__actions">
          <button
            ref={firstButtonRef}
            className="btn btn--primary btn--small"
            type="button"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="btn btn--ghost btn--small"
            type="button"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
