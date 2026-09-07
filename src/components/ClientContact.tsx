"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PHONE, PHONE_LINK, EMAIL, ADDRESS, FORMSPREE_CONTACT_ID } from "@/lib/constants";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ClientContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    const fieldSchema = contactFormSchema.shape[name as keyof ContactFormData];
    if (!fieldSchema) return;
    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      setErrors((prev) => ({ ...prev, [name]: result.error.issues[0]?.message }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const result = contactFormSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject") || undefined,
      message: data.get("message"),
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT_ID}`, {
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

      <section className="contact-hero">
        <div className="contact-hero__inner" data-reveal>
          <span className="label">Get In Touch</span>
          <h1 className="heading-xl">Contact Us</h1>
          <p className="subheading">
            Ready to start saving with solar? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-content__inner">
          <div className="contact-form" data-reveal="left">
            <h2>Send Us a Message</h2>
            {status === "sent" ? (
              <div className="contact-form__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-form__success-icon">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Message Sent!</h3>
                <p className="contact-form__success-text">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Your name" className={errors.name ? "input-error" : ""} onBlur={(e) => validateField("name", e.target.value)} />
                    {errors.name && <span className="form-error-text" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" className={errors.email ? "input-error" : ""} onBlur={(e) => validateField("email", e.target.value)} />
                    {errors.email && <span className="form-error-text" role="alert">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="(555) 000-0000" className={errors.phone ? "input-error" : ""} onBlur={(e) => validateField("phone", e.target.value)} />
                    {errors.phone && <span className="form-error-text" role="alert">{errors.phone}</span>}
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
                  <textarea id="message" name="message" required placeholder="Tell us about your project or question..." className={errors.message ? "input-error" : ""} onBlur={(e) => validateField("message", e.target.value)} />
                  {errors.message && <span className="form-error-text" role="alert">{errors.message}</span>}
                </div>
                <div className="form-honeypot" aria-hidden="true">
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>
                {status === "error" && <p className="form-error-msg" role="alert">Something went wrong. Please call us at {PHONE}.</p>}
                <button type="submit" className="btn btn--primary btn--large btn--full" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
          <div className="contact-info" data-reveal="right">
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Phone</h3>
                <p><a href={`tel:${PHONE_LINK}`}>{PHONE}</a></p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Email</h3>
                <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Address</h3>
                <p>{ADDRESS.street}<br />{ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="contact-info-card__text">
                <h3>Hours</h3>
                <p>Mon &ndash; Fri: 8AM &ndash; 6PM<br />Sat: 9AM &ndash; 2PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__inner" data-reveal>
          <div className="contact-map__placeholder">
            <span>{ADDRESS.full}</span>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta__inner" data-reveal>
          <h2 className="heading-xl">Ready to Go Solar?</h2>
          <p>
            Get a free, no-obligation quote today and discover how much you can
            save with Cosmic Ray Solar.
          </p>
          <div className="contact-cta__actions">
            <Link href="/#contact-form" className="btn btn--accent btn--large">
              Get Free Quote
            </Link>
            <a href={`tel:${PHONE_LINK}`} className="btn btn--outline btn--large btn--outline-light">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
