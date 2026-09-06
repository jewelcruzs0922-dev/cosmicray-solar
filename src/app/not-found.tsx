import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved. Find your way back to Cosmic Ray Solar.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-page__inner">
        <div className="error-page__code">404</div>
        <h1 className="error-page__title">Page Not Found</h1>
        <p className="error-page__msg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="error-page__actions">
          <Link href="/" className="btn btn--primary btn--large">
            Go Home
          </Link>
          <Link href="/#contact-form" className="btn btn--ghost btn--large">
            Contact Us
          </Link>
        </div>
        <div className="error-page__links">
          <h3>Popular Pages</h3>
          <ul>
            <li>
              <Link href="/#solutions">Solar Solutions</Link>
            </li>
            <li>
              <Link href="/#shop">Shop Products</Link>
            </li>
            <li>
              <Link href="/#how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/#financing">Financing</Link>
            </li>
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
