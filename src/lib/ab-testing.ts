/**
 * A/B Testing Framework
 *
 * Lightweight client-side A/B testing using localStorage.
 * Tests are defined in code and assigned to users randomly.
 *
 * Usage:
 *   import { useExperiment } from "@/lib/ab-testing";
 *   const { variant } = useExperiment("hero-cta-color");
 *   if (variant === "B") { ... }
 */

export interface Experiment {
  name: string;
  variants: string[];
  weights?: number[];
}

const EXperiments: Experiment[] = [
  { name: "hero-cta-color", variants: ["green", "gold"], weights: [50, 50] },
  { name: "pricing-layout", variants: ["cards", "table"], weights: [60, 40] },
  { name: "contact-form-length", variants: ["short", "full"], weights: [50, 50] },
];

function getStoredVariant(experimentName: string): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(`ab-${experimentName}`);
}

function assignVariant(experiment: Experiment): string {
  const weights = experiment.weights ?? experiment.variants.map(() => 1);
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < experiment.variants.length; i++) {
    random -= weights[i];
    if (random <= 0) return experiment.variants[i];
  }
  return experiment.variants[0];
}

export function getVariant(experimentName: string): string {
  const stored = getStoredVariant(experimentName);
  if (stored) return stored;

  const experiment = EXperiments.find((e) => e.name === experimentName);
  if (!experiment) return "control";

  const variant = assignVariant(experiment);
  if (typeof window !== "undefined") {
    localStorage.setItem(`ab-${experimentName}`, variant);
  }
  return variant;
}

export function trackConversion(experimentName: string, metric: string) {
  if (typeof window === "undefined") return;
  const variant = getStoredVariant(experimentName);
  if (!variant) return;

  // In production, send to analytics (GA4, Mixpanel, etc.)
  if (typeof window.gtag === "function") {
    window.gtag("event", "ab_test_conversion", {
      experiment_name: experimentName,
      variant,
      metric,
    });
  }
}
