"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

type Status = "idle" | "sending" | "sent" | "error";

export default function AppointmentForm() {
  const { showToast } = useToast();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");

    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        showToast("Appointment scheduled! We'll confirm within 2 hours.");
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      showToast("Something went wrong. Please call us.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="contact-form" data-reveal="left">
      <h2>Book Your Appointment</h2>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
        Select your appointment type, preferred date and time. We&apos;ll confirm within 2 hours.
      </p>

      {status === "sent" ? (
        <div className="contact-form__success">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-form__success-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          <h3>Appointment Scheduled!</h3>
          <p className="contact-form__success-text">We&apos;ll send you a confirmation email shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appt-name">Full Name *</label>
              <input type="text" id="appt-name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="appt-email">Email *</label>
              <input type="email" id="appt-email" name="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appt-phone">Phone *</label>
              <input type="tel" id="appt-phone" name="phone" required placeholder="(555) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="appt-type">Appointment Type *</label>
              <select id="appt-type" name="type" required>
                <option value="">Select type</option>
                <option value="assessment">Free Solar Assessment</option>
                <option value="consultation">Financing Consultation</option>
                <option value="installation">Installation Planning</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appt-date">Preferred Date *</label>
              <input type="date" id="appt-date" name="date" required min={minDate} />
            </div>
            <div className="form-group">
              <label htmlFor="appt-time">Preferred Time *</label>
              <select id="appt-time" name="time" required>
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="appt-message">Additional Notes</label>
            <textarea id="appt-message" name="message" rows={3} placeholder="Any questions or details..." />
          </div>
          {status === "error" && <p className="form-error-msg" role="alert">Something went wrong. Please try again.</p>}
          <button type="submit" className="btn btn--primary btn--large btn--full" disabled={status === "sending"}>
            {status === "sending" ? "Scheduling..." : "Schedule Appointment"}
          </button>
        </form>
      )}
    </div>
  );
}
