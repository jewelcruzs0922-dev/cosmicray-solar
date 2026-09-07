import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import ExitPopup from "@/components/ExitPopup";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import { ToastProvider } from "@/components/Toast";
import CartProvider from "@/components/CartContext";
import PageTransition from "@/components/PageTransition";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Solar Energy Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Professional solar installations that cut your electricity bills by up to 75%. Save $1,847/year on average. Free assessment.",
  openGraph: {
    title: `${SITE_NAME} | Solar Energy Solutions`,
    description:
      "Professional solar installations that cut your electricity bills by up to 75%. Save $1,847/year on average. Free assessment.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Professional Solar Energy Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cosmicraysolar",
    title: `${SITE_NAME} | Solar Energy Solutions`,
    description:
      "Professional solar installations that cut your electricity bills by up to 75%. Save $1,847/year on average. Free assessment.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CartProvider>
          <ToastProvider>
            <noscript
              dangerouslySetInnerHTML={{
                __html: process.env.NEXT_PUBLIC_GTM_ID
                  ? `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                  : "",
              }}
            />
            <a href="#main" className="skip-link">
              Skip to main content
            </a>
            <Header />
            <main id="main"><PageTransition>{children}</PageTransition></main>
            <Footer />
            <BackToTop />
            <CookieBanner />
            <ExitPopup />
            <AnalyticsLoader />
            {process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID && process.env.NEXT_PUBLIC_TAWK_WIDGET_ID && (
              <Script
                id="tawk-to"
                src={`https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}`}
                strategy="lazyOnload"
              />
            )}
            <div id="aria-live-region" aria-live="polite" aria-atomic="true" className="sr-only" />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
