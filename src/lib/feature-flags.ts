/**
 * Feature Flags System
 *
 * Simple, lightweight feature flags for gradual rollouts.
 * Flags are read from environment variables and can be toggled per-deployment.
 *
 * Usage:
 *   import { isEnabled } from "@/lib/feature-flags";
 *   if (isEnabled("NEW_CHECKOUT")) { ... }
 *
 * To enable a flag, add to .env.local:
 *   NEXT_PUBLIC_FLAG_NEW_CHECKOUT=true
 */

const flags = {
  NEW_CHECKOUT: process.env.NEXT_PUBLIC_FLAG_NEW_CHECKOUT === "true",
  NEWSLETTER_POPUP: process.env.NEXT_PUBLIC_FLAG_NEWSLETTER_POPUP === "true",
  DARK_MODE: process.env.NEXT_PUBLIC_FLAG_DARK_MODE === "true",
  AI_CHAT: process.env.NEXT_PUBLIC_FLAG_AI_CHAT === "true",
  LIVE_PRICING: process.env.NEXT_PUBLIC_FLAG_LIVE_PRICING === "true",
} as const;

export type FeatureFlag = keyof typeof flags;

export function isEnabled(flag: FeatureFlag): boolean {
  return flags[flag] ?? false;
}

export function getAllFlags(): Record<FeatureFlag, boolean> {
  return { ...flags };
}
