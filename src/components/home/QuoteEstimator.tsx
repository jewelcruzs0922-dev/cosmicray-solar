"use client";

import { useState, useCallback } from "react";

interface EstimateResult {
  systemSize: number;
  monthlySavings: number;
  paybackPeriod: number;
  twentyFiveYearSavings: number;
}

const roofTypes = [
  { value: "", label: "Select roof type" },
  { value: "asphalt", label: "Asphalt Shingle" },
  { value: "tile", label: "Tile" },
  { value: "metal", label: "Metal" },
  { value: "flat", label: "Flat / Low Slope" },
  { value: "slate", label: "Slate" },
];

function calculateEstimate(monthlyBill: number, roofType: string): EstimateResult {
  const costPerKw = roofType === "flat" ? 2.8 : roofType === "tile" ? 3.2 : 3.0;
  const sunHours = 4.5;
  const systemSize = Math.round((monthlyBill * 12) / (sunHours * 365 * 0.15 * 12) * 10) / 10;
  const cappedSystem = Math.min(Math.max(systemSize, 3), 20);
  const systemCost = cappedSystem * costPerKw * 1000;
  const taxCredit = systemCost * 0.3;
  const netCost = systemCost - taxCredit;
  const monthlySavings = Math.round(monthlyBill * 0.85);
  const paybackPeriod = Math.round((netCost / (monthlySavings * 12)) * 10) / 10;
  const twentyFiveYearSavings = monthlySavings * 12 * 25;

  return {
    systemSize: cappedSystem,
    monthlySavings,
    paybackPeriod,
    twentyFiveYearSavings,
  };
}

export default function QuoteEstimator() {
  const [address, setAddress] = useState("");
  const [roofType, setRoofType] = useState("");
  const [monthlyBill, setMonthlyBill] = useState(200);
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [errors, setErrors] = useState<{ address?: string; roofType?: string }>({});

  const handleEstimate = useCallback(() => {
    const newErrors: { address?: string; roofType?: string } = {};
    if (!address.trim()) newErrors.address = "Please enter your address";
    if (!roofType) newErrors.roofType = "Please select a roof type";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setResult(calculateEstimate(monthlyBill, roofType));
  }, [address, roofType, monthlyBill]);

  return (
    <section className="quote-estimator" aria-label="Quote Estimator">
      <div className="quote-estimator__inner">
        <div className="quote-estimator__header">
          <span className="label">Instant Estimate</span>
          <h2 className="heading-xl">Get a Quick Quote</h2>
          <p className="subheading" style={{ margin: "0 auto" }}>
            Enter your address and monthly bill to see an instant estimate of
            your solar savings.
          </p>
        </div>

        <div className="quote-estimator__card">
          <div className="quote-estimator__form">
            <div className="form-group">
              <label htmlFor="qe-address">Your Address</label>
              <input
                id="qe-address"
                type="text"
                placeholder="123 Main St, City, State"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={errors.address ? "error" : ""}
                aria-describedby={errors.address ? "qe-address-error" : undefined}
              />
              {errors.address && (
                <span className="form-error" id="qe-address-error" role="alert">
                  {errors.address}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="qe-roof">Roof Type</label>
              <select
                id="qe-roof"
                value={roofType}
                onChange={(e) => setRoofType(e.target.value)}
                className={errors.roofType ? "error" : ""}
                aria-describedby={errors.roofType ? "qe-roof-error" : undefined}
              >
                {roofTypes.map((rt) => (
                  <option key={rt.value} value={rt.value}>
                    {rt.label}
                  </option>
                ))}
              </select>
              {errors.roofType && (
                <span className="form-error" id="qe-roof-error" role="alert">
                  {errors.roofType}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="qe-bill">
                Monthly Electric Bill: <strong>${monthlyBill}</strong>
              </label>
              <input
                id="qe-bill"
                type="range"
                min={50}
                max={800}
                step={10}
                value={monthlyBill}
                onChange={(e) => {
                  setMonthlyBill(Number(e.target.value));
                  setResult(null);
                }}
                className="quote-estimator__slider"
                aria-label="Monthly electric bill amount"
              />
              <div className="quote-estimator__range-labels">
                <span>$50</span>
                <span>$800</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--primary btn--large btn--full"
              onClick={handleEstimate}
            >
              Calculate Estimate
            </button>
          </div>

          {result && (
            <div className="quote-estimator__results" role="region" aria-live="polite" aria-label="Estimate results">
              <h3 className="heading-md">Your Estimate</h3>
              <div className="quote-estimator__metrics">
                <div className="quote-estimator__metric">
                  <span className="quote-estimator__metric-value">
                    {result.systemSize} kW
                  </span>
                  <span className="quote-estimator__metric-label">
                    Estimated System Size
                  </span>
                </div>
                <div className="quote-estimator__metric">
                  <span className="quote-estimator__metric-value">
                    ${result.monthlySavings}/mo
                  </span>
                  <span className="quote-estimator__metric-label">
                    Estimated Monthly Savings
                  </span>
                </div>
                <div className="quote-estimator__metric">
                  <span className="quote-estimator__metric-value">
                    {result.paybackPeriod} years
                  </span>
                  <span className="quote-estimator__metric-label">
                    Estimated Payback Period
                  </span>
                </div>
                <div className="quote-estimator__metric quote-estimator__metric--highlight">
                  <span className="quote-estimator__metric-value">
                    ${result.twentyFiveYearSavings.toLocaleString()}
                  </span>
                  <span className="quote-estimator__metric-label">
                    25-Year Savings
                  </span>
                </div>
              </div>
              <a href="#contact-form" className="btn btn--accent btn--large btn--full">
                Get Exact Quote &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
