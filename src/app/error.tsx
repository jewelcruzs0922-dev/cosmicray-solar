"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  return (
    <section className="error-page">
      <div className="error-page__inner">
        <span className="label">Something went wrong</span>
        <h1 className="heading-xl">Unexpected Error</h1>
        <p className="subheading">
          We encountered an unexpected error. Please try again or contact us if the problem persists.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn--primary btn--large" onClick={reset}>
            Try Again
          </button>
          <Link href="/" className="btn btn--outline btn--large">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
