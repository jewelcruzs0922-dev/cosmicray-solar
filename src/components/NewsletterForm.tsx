"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New Newsletter Subscriber");
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (status === "sent") {
    return <p style={{ color: "var(--color-primary)", fontWeight: 600 }}>Thanks for subscribing!</p>;
  }

  return (
    <form className="newsletter__form" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" aria-label="Email address" required />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Subscribing..." : status === "error" ? "Error - Try Again" : "Subscribe"}
      </button>
    </form>
  );
}
