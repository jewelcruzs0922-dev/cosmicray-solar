import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME, PHONE, PHONE_LINK } from "@/lib/constants";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Schedule an Appointment",
  description: `Book a free solar assessment, consultation, or installation planning session with ${SITE_NAME}. Choose a date and time that works for you.`,
  openGraph: {
    title: `Schedule an Appointment | ${SITE_NAME}`,
    description: "Book a free solar assessment or consultation online.",
    type: "website",
    url: `${SITE_URL}/schedule`,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${SITE_NAME} — Schedule Appointment` }],
  },
  twitter: { card: "summary_large_image", title: `Schedule an Appointment | ${SITE_NAME}`, description: "Book a free solar assessment or consultation.", images: [`${SITE_URL}/opengraph-image`] },
  alternates: { canonical: `${SITE_URL}/schedule` },
};

export default function SchedulePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Schedule Appointment" }]} />

      <section className="contact-hero">
        <div className="contact-hero__inner" data-reveal>
          <span className="label">Book Online</span>
          <h1 className="heading-xl">Schedule an Appointment</h1>
          <p className="subheading">
            Choose a date and time that works for you. Free assessments, consultations, and installation planning.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-content__inner">
          <AppointmentForm />

          <div className="contact-info" data-reveal="right">
            <div className="contact-info-card">
              <div className="contact-info-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
              <div className="contact-info-card__text"><h3>Prefer to Call?</h3><p><a href={`tel:${PHONE_LINK}`}>{PHONE}</a></p><p className="contact-info-card__small">Mon-Fri 8AM-6PM</p></div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
              <div className="contact-info-card__text"><h3>Response Time</h3><p>We confirm appointments within 2 hours during business hours.</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
