"use client";

import { useContactForm } from "@/hooks/useContactForm";

export default function ContactFormSection() {
  const { status, errors, validateField, handleSubmit } = useContactForm();

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-section__inner">
        <div className="contact-form-section__header">
          <span className="label">Get a Free Quote</span>
          <h2 className="heading-xl">Ready to Start Saving?</h2>
          <p className="subheading">Fill out the form below and we&apos;ll get back to you within 24 hours with a custom savings estimate.</p>
        </div>

        {status === "sent" ? (
          <div className="contact-form-section__success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name *</label>
                <input type="text" id="contact-name" name="name" required placeholder="Your name" className={errors.name ? "input-error" : ""} onBlur={(e) => validateField("name", e.target.value)} />
                {errors.name && <span className="form-error-text" role="alert">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input type="email" id="contact-email" name="email" required placeholder="you@example.com" className={errors.email ? "input-error" : ""} onBlur={(e) => validateField("email", e.target.value)} />
                {errors.email && <span className="form-error-text" role="alert">{errors.email}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input type="tel" id="contact-phone" name="phone" required placeholder="(555) 000-0000" className={errors.phone ? "input-error" : ""} onBlur={(e) => validateField("phone", e.target.value)} />
                {errors.phone && <span className="form-error-text" role="alert">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <select id="contact-subject" name="subject">
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
              <label htmlFor="contact-message">Message *</label>
              <textarea id="contact-message" name="message" required placeholder="Tell us about your project or question..." className={errors.message ? "input-error" : ""} onBlur={(e) => validateField("message", e.target.value)} />
              {errors.message && <span className="form-error-text" role="alert">{errors.message}</span>}
            </div>
            <div className="form-honeypot" aria-hidden="true">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            {status === "error" && <p className="form-error-msg" role="alert">Something went wrong. Please try again.</p>}
            <button type="submit" className="btn btn--primary btn--large btn--full" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
