import Link from "next/link";

export default function CheckoutCancel() {
  return (
    <section className="error-page">
      <div className="error-page__inner">
        <h1 className="heading-xl">Checkout Cancelled</h1>
        <p className="subheading">
          Your order was not completed. Your cart items are still saved if you&apos;d like to try again.
        </p>
        <div className="error-page__actions" style={{ marginTop: "var(--space-8)" }}>
          <Link href="/#shop" className="btn btn--primary btn--large">Return to Shop</Link>
          <Link href="/contact" className="btn btn--outline btn--large">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
