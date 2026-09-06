import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import ExitPopup from "@/components/ExitPopup";
import { ToastProvider } from "@/components/Toast";
import CartProvider from "@/components/CartContext";
import PageTransition from "@/components/PageTransition";

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
  metadataBase: new URL("https://www.cosmicray.com"),
  title: {
    default: "Cosmic Ray | Solar Energy Solutions",
    template: "%s | Cosmic Ray Solar",
  },
  description:
    "Professional solar installations that cut your electricity bills by up to 75%. Save $1,847/year on average. Free assessment.",
  openGraph: {
    title: "Cosmic Ray | Solar Energy Solutions",
    description:
      "Professional solar installations that cut your electricity bills by up to 75%. Save $1,847/year on average. Free assessment.",
    type: "website",
    locale: "en_US",
    siteName: "Cosmic Ray Solar",
    url: "https://www.cosmicray.com",
    images: [
      {
        url: "https://www.cosmicray.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cosmic Ray Solar — Professional Solar Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cosmicraysolar",
    title: "Cosmic Ray | Solar Energy Solutions",
    description:
      "Professional solar installations that cut your electricity bills by up to 75%. Save $1,847/year on average. Free assessment.",
    images: ["https://www.cosmicray.com/opengraph-image"],
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}
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
        {process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID && process.env.NEXT_PUBLIC_TAWK_WIDGET_ID && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          />
        )}
        <div
          id="aria-live-region"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}
        />
        </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
