"use client";

import { useState } from "react";

export default function SavingsCalculator() {
  const [bill, setBill] = useState(250);
  const yearlyBill = bill * 12;
  const yearlySavings = Math.round(yearlyBill * 0.75);
  const systemSizeKw = Math.min(15, Math.max(4, Math.round((yearlyBill / (365 * 5 * 1.3 * 0.22)) * 10) / 10));
  const paybackYears = Math.round((systemSizeKw * 1000 * 2.10 / yearlySavings) * 10) / 10;
  const twentyFiveYrSavings = yearlySavings * 25;

  return (
    <section className="calculator" id="calculator">
      <div className="calculator__inner">
        <div className="calculator__header">
          <span className="label">Savings Calculator</span>
          <h2 className="heading-xl">See How Much You Could Save</h2>
          <p className="subheading">Adjust your monthly electricity bill to see your potential savings with solar.</p>
        </div>
        <div className="calculator__card">
          <div className="calculator__input-group">
            <label htmlFor="bill-slider">Monthly Electricity Bill: <strong>${bill}</strong></label>
            <input type="range" id="bill-slider" min="50" max="800" step="10" value={bill} onChange={(e) => setBill(Number(e.target.value))} className="calculator__slider" />
            <div className="calculator__range-labels"><span>$50</span><span>$800</span></div>
          </div>
          <div className="calculator__results">
            <div className="calculator__result"><span className="calculator__result-value">${yearlySavings.toLocaleString()}</span><span className="calculator__result-label">Yearly Savings</span></div>
            <div className="calculator__result"><span className="calculator__result-value">{systemSizeKw} kW</span><span className="calculator__result-label">System Size</span></div>
            <div className="calculator__result"><span className="calculator__result-value">{paybackYears} yrs</span><span className="calculator__result-label">Payback Period</span></div>
            <div className="calculator__result calculator__result--highlight"><span className="calculator__result-value">${twentyFiveYrSavings.toLocaleString()}</span><span className="calculator__result-label">25-Year Savings</span></div>
          </div>
          <a href="#contact-form" className="btn btn--primary btn--large btn--full">Get My Free Quote</a>
        </div>
      </div>
    </section>
  );
}
