import type { Metadata } from "next";
import ShopPageClient from "./ShopPageClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shop Solar Products",
  description: "Professional-grade solar panels, batteries, inverters, EV chargers, and accessories from trusted manufacturers.",
  openGraph: {
    title: "Shop Solar Products | Cosmic Ray Solar",
    description: "Professional-grade solar equipment from trusted manufacturers.",
    type: "website",
    url: `${SITE_URL}/shop`,
  },
  alternates: { canonical: `${SITE_URL}/shop` },
};

export default function ShopPage() {
  return <ShopPageClient />;
}
