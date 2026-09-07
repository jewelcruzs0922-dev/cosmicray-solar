"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ClientContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`, {
        method: "POST",
        body: data,
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
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero__inner" data-reveal>
          <span className="label">Get In Touch</span>
          <h1 className="heading-xl">Contact Us</h1>
          <p className="subheading">
            Ready to start saving with solar? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-content__inner">
          <div className="contact-form" data-reveal="left">
            <h2>Send Us a Message</h2>
            {status === "sent" ? (
              <div style={{ padding: "var(--space-8)", textAlign: "center" }}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ margin: "0 auto var(--space-4)" }}
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Message Sent!</h3>
                <p style={{ color: "var(--color-text-muted)" }}>
                  Thank you for reaching out. We&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject">
                      <option value="">Select a topic</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="battery">Battery Storage</option>
                      <option value="ev">EV Charging</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>
                {status === "error" && (
                  <p role="alert" style={{ color: "var(--color-red)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                    Something went wrong. Please call us at (555) 123-4567.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn--primary btn--large btn--full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
          <div className="contact-info" data-reveal="right">
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+1555123456">(555) 123-4567</a>
                </p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@cosmicray.com">
                    info@cosmicray.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Address</h3>
                <p>
                  123 Solar Avenue
                  <br />
                  Sunshine City, CA 90210
                </p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Hours</h3>
                <p>
                  Mon – Fri: 8AM – 6PM
                  <br />
                  Sat: 9AM – 2PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <div className="contact-map__inner" data-reveal>
          <div className="contact-map__placeholder">
            <span>123 Solar Avenue, Sunshine City, CA 90210</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="contact-cta__inner" data-reveal>
          <h2 className="heading-xl">Ready to Go Solar?</h2>
          <p>
            Get a free, no-obligation quote today and discover how much you can
            save with Cosmic Ray Solar.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Quote
            </Link>
            <a
              href="tel:+1555123456"
              className="btn btn--outline btn--large"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
