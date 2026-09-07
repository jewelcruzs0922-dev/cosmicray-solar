export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-section__noise" />
      <div className="cta-section__inner">
        <span className="label label--dark">Ready to Go Solar?</span>
        <h2 className="heading-xl heading-xl--light">Your roof is sitting on $46,000 in savings</h2>
        <p className="subheading subheading--light">Get a free estimate in 15 minutes. No sales pitch — just numbers.</p>
        <div className="cta-section__actions">
          <a href="/schedule" className="btn btn--accent btn--large">Get your free estimate</a>
          <a href="tel:+15551234567" className="btn btn--outline-light btn--large">Call (555) 123-4567</a>
        </div>
      </div>
    </section>
  );
}
