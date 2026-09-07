"use client";

import { useState } from "react";
import { FORMSPREE_NEWSLETTER_ID } from "@/lib/constants";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New Newsletter Subscriber");
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_NEWSLETTER_ID}`, {
        method: "POST",
        body: formData,
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

  if (status === "sent") {
    return <p className="newsletter__success">Thanks for subscribing!</p>;
  }

  return (
    <form className="newsletter__form" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" aria-label="Email address" required />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Subscribing..." : status === "error" ? "Error - Try Again" : "Subscribe"}
      </button>
    </form>
  );
}
