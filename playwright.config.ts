import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // Only *.spec.ts are Playwright specs; tests/*.test.ts are Vitest unit tests.
  testMatch: "**/*.spec.ts",
  // Visual baselines are local-only: CI has no committed baselines, so the
  // visual suite would always fail there. Functional e2e still runs in CI.
  testIgnore: process.env.CI ? "**/visual.spec.ts" : undefined,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    // System Chrome (preinstalled on GitHub runners) — no browser download needed.
    channel: "chrome",
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
