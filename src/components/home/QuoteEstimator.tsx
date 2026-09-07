"use client";

import { useState, useMemo } from "react";

const roofTypes = [
  { value: "asphalt", label: "Asphalt Shingle", desc: "Most common, easy install" },
  { value: "tile", label: "Tile", desc: "Higher labor cost" },
  { value: "metal", label: "Metal", desc: "Premium, fastest install" },
  { value: "flat", label: "Flat / Low Slope", desc: "Ballasted system" },
];

export default function QuoteEstimator() {
  const [address, setAddress] = useState("");
  const [roofType, setRoofType] = useState("asphalt");
  const [monthlyBill, setMonthlyBill] = useState(250);

  const estimate = useMemo(() => {
    const yearlyBill = monthlyBill * 12;
    const costPerKw = roofType === "flat" ? 2.8 : roofType === "tile" ? 3.2 : roofType === "metal" ? 3.0 : 2.9;
    const systemSize = Math.min(20, Math.max(3, Math.round((yearlyBill / (4.5 * 365 * 0.15 * 12)) * 10) / 10));
    const systemCost = systemSize * costPerKw * 1000;
    const taxCredit = systemCost * 0.3;
    const netCost = systemCost - taxCredit;
    const monthlySavings = Math.round(monthlyBill * 0.85);
    const paybackYears = Math.round((netCost / (monthlySavings * 12)) * 10) / 10;
    const yearlySavings = monthlySavings * 12;
    const twentyFiveYearSavings = yearlySavings * 25;

    return {
      conservative: { savings: Math.round(monthlySavings * 0.8), payback: Math.round((netCost / (monthlySavings * 0.8 * 12)) * 10) / 10 },
      moderate: { savings: monthlySavings, payback: paybackYears },
      aggressive: { savings: Math.round(monthlySavings * 1.15), payback: Math.round((netCost / (monthlySavings * 1.15 * 12)) * 10) / 10 },
      systemSize,
      systemCost,
      taxCredit,
      netCost,
      yearlySavings,
      twentyFiveYearSavings,
    };
  }, [monthlyBill, roofType]);

  return (
    <section className="quote-estimator" aria-label="Solar Quote Estimator">
      <div className="quote-estimator__inner">
        <div className="quote-estimator__header">
          <span className="label">Instant Estimate</span>
          <h2 className="heading-xl">See Your Savings in Real Time</h2>
          <p className="subheading" style={{ textAlign: "center" }}>Adjust the slider and watch your numbers change instantly.</p>
        </div>

        <div className="quote-estimator__split">
          <div className="quote-estimator__inputs">
            <div className="qe-input">
              <label htmlFor="qe-address">Your Address</label>
              <input id="qe-address" type="text" placeholder="123 Main St, City, State" value={address} onChange={(e) => setAddress(e.target.value)} />
              <span className="qe-input__hint">Used to check local incentives</span>
            </div>

            <div className="qe-input">
              <label>Roof Type</label>
              <div className="qe-roof-options">
                {roofTypes.map((rt) => (
                  <button key={rt.value} type="button" className={`qe-roof-btn${roofType === rt.value ? " qe-roof-btn--active" : ""}`} onClick={() => setRoofType(rt.value)}>
                    <span className="qe-roof-btn__label">{rt.label}</span>
                    <span className="qe-roof-btn__desc">{rt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="qe-input">
              <label htmlFor="qe-bill">Monthly Electric Bill</label>
              <div className="qe-bill-display">
                <span className="qe-bill-amount">${monthlyBill}</span>
                <span className="qe-bill-period">/month</span>
              </div>
              <input id="qe-bill" type="range" min={50} max={800} step={10} value={monthlyBill} onChange={(e) => setMonthlyBill(Number(e.target.value))} className="qe-slider" />
              <div className="qe-slider-labels"><span>$50</span><span>$800</span></div>
            </div>

            <a href="#contact-form" className="btn btn--primary btn--large btn--full">
              Get Exact Quote &rarr;
            </a>
          </div>

          <div className="quote-estimator__results" role="region" aria-live="polite">
            <div className="qe-results__header">
              <span className="qe-results__label">Your Estimate</span>
              <span className="qe-results__system">{estimate.systemSize} kW System</span>
            </div>

            <div className="qe-results__main">
              <div className="qe-results__savings">
                <span className="qe-results__savings-value">${estimate.moderate.savings}</span>
                <span className="qe-results__savings-label">monthly savings</span>
              </div>
              <div className="qe-results__yearly">
                <span className="qe-results__yearly-value">${estimate.yearlySavings.toLocaleString()}</span>
                <span className="qe-results__yearly-label">per year</span>
              </div>
            </div>

            <div className="qe-results__comparison">
              <div className="qe-comparison__header">Savings by Scenario</div>
              {[
                { label: "Conservative", savings: estimate.conservative.savings, payback: estimate.conservative.payback, color: "var(--color-text-muted)" },
                { label: "Moderate", savings: estimate.moderate.savings, payback: estimate.moderate.payback, color: "var(--color-primary)", featured: true },
                { label: "Aggressive", savings: estimate.aggressive.savings, payback: estimate.aggressive.payback, color: "var(--color-accent)" },
              ].map((s) => (
                <div key={s.label} className={`qe-comparison__row${s.featured ? " qe-comparison__row--featured" : ""}`}>
                  <span className="qe-comparison__dot" style={{ background: s.color }} />
                  <span className="qe-comparison__label">{s.label}</span>
                  <span className="qe-comparison__savings">${s.savings}/mo</span>
                  <span className="qe-comparison__payback">{s.payback} yr payback</span>
                </div>
              ))}
            </div>

            <div className="qe-results__breakdown">
              <div className="qe-breakdown__row">
                <span>System Cost</span>
                <span>${estimate.systemCost.toLocaleString()}</span>
              </div>
              <div className="qe-breakdown__row qe-breakdown__row--credit">
                <span>Federal Tax Credit (30%)</span>
                <span>-${estimate.taxCredit.toLocaleString()}</span>
              </div>
              <div className="qe-breakdown__row qe-breakdown__row--net">
                <span>Your Cost</span>
                <span>${estimate.netCost.toLocaleString()}</span>
              </div>
              <div className="qe-breakdown__row qe-breakdown__row--total">
                <span>25-Year Savings</span>
                <span>${estimate.twentyFiveYearSavings.toLocaleString()}</span>
              </div>
            </div>

            <a href="#contact-form" className="btn btn--accent btn--large btn--full">
              Get Exact Quote &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
