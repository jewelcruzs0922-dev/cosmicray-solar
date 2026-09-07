import { test, expect } from "@playwright/test";

const pages = [
  { name: "homepage", path: "/" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
  { name: "blog", path: "/blog" },
  { name: "financing", path: "/financing" },
  { name: "case-studies", path: "/case-studies" },
  { name: "service-areas", path: "/service-areas" },
];

test.describe("Visual Regression", () => {
  for (const page of pages) {
    test(`${page.name} page matches snapshot`, async ({ page: p }) => {
      await p.goto(page.path);
      await p.waitForLoadState("networkidle");
      await expect(p).toHaveScreenshot(`${page.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });
  }

  test("homepage hero section matches snapshot", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const hero = page.locator(".hero");
    await expect(hero).toHaveScreenshot("hero-section.png", {
      maxDiffPixelRatio: 0.01,
    });
  });

  test("mobile homepage matches snapshot", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot("homepage-mobile.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
});
