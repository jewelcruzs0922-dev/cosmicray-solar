import type { Metadata } from "next";
import ClientContact from "@/components/ClientContact";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cosmic Ray Solar. Request a free solar quote, ask questions, or schedule a home assessment. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | Cosmic Ray Solar",
    description:
      "Get in touch with Cosmic Ray Solar. Request a free solar quote, ask questions, or schedule a home assessment.",
    type: "website",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Cosmic Ray Solar",
    description:
      "Get in touch with Cosmic Ray Solar. Request a free solar quote, ask questions, or schedule a home assessment.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ClientContact />;
}
