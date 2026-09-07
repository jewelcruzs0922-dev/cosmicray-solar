export default function FinancingSection() {
  return (
    <section className="financing" id="financing">
      <div className="financing__inner">
        <div className="financing__header">
          <span className="label">Flexible Payment Options</span>
          <h2 className="heading-xl">Solar for Every Budget</h2>
          <p className="subheading">Choose the payment plan that works best for you.</p>
        </div>
        <div className="financing__grid">
          <div className="financing__card">
            <h3 className="heading-md">Cash Purchase</h3>
            <div className="financing__price">$15,000 <span>avg.</span></div>
            <ul className="financing__list">
              <li>&#10003; Own your system outright</li>
              <li>&#10003; Maximum lifetime savings</li>
              <li>&#10003; 30% federal tax credit</li>
              <li>&#10003; Increased home value</li>
            </ul>
            <a href="#contact-form" className="btn btn--primary btn--full">Get Quote</a>
          </div>
          <div className="financing__card financing__card--featured">
            <span className="financing__badge">Most Popular</span>
            <h3 className="heading-md">Solar Loan</h3>
            <div className="financing__price">$0 <span>down</span></div>
            <ul className="financing__list">
              <li>&#10003; $0 down payment</li>
              <li>&#10003; Own the system immediately</li>
              <li>&#10003; Fixed monthly payments</li>
              <li>&#10003; 30% federal tax credit</li>
            </ul>
            <a href="#contact-form" className="btn btn--primary btn--full">Get Quote</a>
          </div>
          <div className="financing__card">
            <h3 className="heading-md">Lease / PPA</h3>
            <div className="financing__price">$0 <span>down</span></div>
            <ul className="financing__list">
              <li>&#10003; No ownership required</li>
              <li>&#10003; Pay for power you use</li>
              <li>&#10003; Free maintenance included</li>
              <li>&#10003; Immediate monthly savings</li>
            </ul>
            <a href="#contact-form" className="btn btn--primary btn--full">Get Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
