"use client";

import { useNewsletterForm } from "@/hooks/useNewsletterForm";

export default function NewsletterSection() {
  const { status, handleSubmit } = useNewsletterForm();

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
