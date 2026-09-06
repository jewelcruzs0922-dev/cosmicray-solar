import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert advice on solar energy, battery storage, EV charging, and reducing your electricity bills. Written by certified solar professionals.",
  openGraph: {
    title: "Blog | Cosmic Ray Solar",
    description:
      "Expert advice on solar energy, battery storage, EV charging, and reducing your electricity bills.",
    type: "website",
    url: "https://www.cosmicray.com/blog",
    siteName: "Cosmic Ray Solar",
    locale: "en_US",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
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
    images: ["https://www.cosmicray.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.cosmicray.com/blog",
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
