"use client";

import { useState } from "react";
import { FORMSPREE_NEWSLETTER_ID } from "@/lib/constants";

export default function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New Newsletter Subscriber");
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_NEWSLETTER_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <h2 className="heading-xl">Stay Informed</h2>
        <p className="subheading">Get the latest solar tips, guides, and news delivered to your inbox.</p>
        {status === "sent" ? (
          <p className="newsletter__success">Thanks for subscribing!</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter your email" aria-label="Email address" required />
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
            <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
              {status === "sending" ? "Subscribing..." : status === "error" ? "Error - Try Again" : "Subscribe"}
            </button>
          </form>
        )}
        <p className="newsletter__disclaimer">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
