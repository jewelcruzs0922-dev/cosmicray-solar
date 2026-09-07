import type { Metadata } from "next";
import ClientHome from "@/components/ClientHome";
import { faqItems } from "@/data/faq";
import { SITE_URL, SITE_NAME, PHONE, EMAIL, ADDRESS } from "@/lib/constants";

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
        telephone: PHONE,
        email: EMAIL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
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
        sameAs: [
          "https://facebook.com/cosmicraysolar",
          "https://instagram.com/cosmicraysolar",
          "https://linkedin.com/company/cosmicraysolar",
          "https://youtube.com/@cosmicraysolar",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
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
