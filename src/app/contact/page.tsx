import type { Metadata } from "next";
import ClientContact from "@/components/ClientContact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cosmic Ray Solar. Request a free solar quote, ask questions, or schedule a home assessment. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | Cosmic Ray Solar",
    description:
      "Get in touch with Cosmic Ray Solar. Request a free solar quote, ask questions, or schedule a home assessment.",
    type: "website",
    url: "https://www.cosmicray.com/contact",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
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
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/contact",
  },
};

export default function ContactPage() {
  return <ClientContact />;
}
