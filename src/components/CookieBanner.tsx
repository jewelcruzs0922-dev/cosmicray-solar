"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cr-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cr-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cr-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <div
      className={`cookie-banner${visible ? " visible" : ""}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          We use cookies to improve your experience and analyze site traffic. By
          clicking &quot;Accept,&quot; you consent to our use of cookies.{" "}
          <a href="/privacy">Learn more</a>
        </p>
        <div className="cookie-banner__actions">
          <button
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
