import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert advice on solar energy, battery storage, EV charging, and reducing your electricity bills. Written by certified solar professionals.",
  openGraph: {
    title: "Blog | Cosmic Ray Solar",
    description:
      "Expert advice on solar energy, battery storage, EV charging, and reducing your electricity bills.",
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Cosmic Ray Solar",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Cosmic Ray Solar",
    description:
      "Expert advice on solar energy, battery storage, EV charging, and reducing your electricity bills.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
