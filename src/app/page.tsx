import type { Metadata } from "next";
import ClientHome from "@/components/ClientHome";
import { faqItems } from "@/data/faq";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SolarEnergyService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Cosmic Ray Solar provides expert solar energy solutions including solar panel installation, battery storage, EV charging, heat pumps, and commercial solar systems.",
        telephone: "+1-555-123-4567",
        email: "info@cosmicray.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.cosmicray.com/logo.png",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Solar Avenue",
          addressLocality: "Sunshine City",
          addressRegion: "CA",
          postalCode: "90210",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "State", name: "California" },
          { "@type": "State", name: "Nevada" },
          { "@type": "State", name: "Arizona" },
          { "@type": "State", name: "Texas" },
          { "@type": "State", name: "Colorado" },
          { "@type": "State", name: "Oregon" },
          { "@type": "State", name: "Washington" },
          { "@type": "State", name: "Utah" },
          { "@type": "State", name: "New Mexico" },
          { "@type": "State", name: "Florida" },
          { "@type": "State", name: "North Carolina" },
          { "@type": "State", name: "Virginia" },
          { "@type": "State", name: "Georgia" },
          { "@type": "State", name: "Illinois" },
          { "@type": "State", name: "New York" },
        ],
        priceRange: "$$",
        serviceType: [
          "Solar Panel Installation",
          "Battery Storage",
          "EV Charging",
          "Heat Pumps",
          "Commercial Solar",
        ],
        publisher: {
          "@type": "Organization",
          name: "Cosmic Ray Solar",
          url: "https://www.cosmicray.com",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        sameAs: [
          "https://facebook.com/cosmicraysolar",
          "https://instagram.com/cosmicraysolar",
          "https://linkedin.com/company/cosmicraysolar",
          "https://youtube.com/@cosmicraysolar",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://www.cosmicray.com/#org",
        name: "Cosmic Ray Solar",
        url: "https://www.cosmicray.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.cosmicray.com/logo.png",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2400",
          bestRating: "5",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cosmicray.com/#website",
        name: "Cosmic Ray Solar",
        url: "https://www.cosmicray.com",
        publisher: { "@id": "https://www.cosmicray.com/#org" },
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientHome />
    </>
  );
}
