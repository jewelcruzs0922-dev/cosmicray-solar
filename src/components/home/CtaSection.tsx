import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-section__noise" />
      <div className="cta-section__inner">
        <span className="label label--dark">Ready to Go Solar?</span>
        <h2 className="heading-xl heading-xl--light">Start Saving With Solar Today</h2>
        <p className="subheading subheading--light">Get a free, no-obligation quote and see how much you can save with solar energy.</p>
        <div className="cta-section__actions">
          <Link href="/#contact-form" className="btn btn--accent btn--large">Get Free Quote</Link>
          <Link href="/about" className="btn btn--outline-light btn--large">Learn About Us</Link>
        </div>
      </div>
    </section>
  );
}
