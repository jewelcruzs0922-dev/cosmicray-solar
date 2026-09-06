import type { Metadata } from "next";
import ClientHome from "@/components/ClientHome";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.cosmicray.com",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SolarEnergyService",
        "@id": "https://www.cosmicray.com/#organization",
        name: "Cosmic Ray Solar",
        url: "https://www.cosmicray.com",
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
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.cosmicray.com/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much can I save with solar panels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most homeowners save 50-75% on electricity bills. On average, our customers save $1,800-$2,400 per year.",
        },
      },
      {
        "@type": "Question",
        name: "How long does installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most installations complete in 1-2 days. The full process takes 4-8 weeks including permitting.",
        },
      },
      {
        "@type": "Question",
        name: "Do solar panels work on cloudy days?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Solar panels produce energy from daylight, generating 10-25% capacity on cloudy days.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during a power outage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With battery storage, your system automatically switches to backup power during outages.",
        },
      },
      {
        "@type": "Question",
        name: "Are there tax credits available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The federal ITC covers 30% of installation cost. Many states offer additional rebates.",
        },
      },
      {
        "@type": "Question",
        name: "What warranty do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "25-year panel warranty, 12-year inverter warranty, and 10-year workmanship warranty.",
        },
      },
    ],
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
