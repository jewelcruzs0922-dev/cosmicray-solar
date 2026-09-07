import Link from "next/link";

export default function CheckoutSuccess() {
  return (
    <section className="error-page">
      <div className="error-page__inner">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto var(--space-6)" }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h1 className="heading-xl">Order Confirmed!</h1>
        <p className="subheading">
          Thank you for your purchase. We&apos;ll send you a confirmation email with order details and next steps.
        </p>
        <div className="error-page__actions" style={{ marginTop: "var(--space-8)" }}>
          <Link href="/" className="btn btn--primary btn--large">Back to Home</Link>
          <Link href="/shop" className="btn btn--outline btn--large">Continue Shopping</Link>
        </div>
      </div>
    </section>
  );
}
