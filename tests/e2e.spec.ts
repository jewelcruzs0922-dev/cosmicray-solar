import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Cosmic Ray Solar/);
  });

  test("has hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".hero")).toBeVisible();
  });

  test("navigation links work", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL(/\/about/);
  });

  test("contact form is present", async ({ page }) => {
    await page.goto("/");
    const form = page.locator("#contact-form");
    await expect(form).toBeVisible();
  });

  test("product shop has items", async ({ page }) => {
    await page.goto("/");
    const products = page.locator(".product-card");
    await expect(products.first()).toBeVisible();
  });
});

test.describe("Contact Form", () => {
  test("shows validation errors for empty fields", async ({ page }) => {
    await page.goto("/contact");
    await page.click('button[type="submit"]');
    await expect(page.locator(".form-error-text").first()).toBeVisible();
  });

  test("validates email format", async ({ page }) => {
    await page.goto("/contact");
    await page.fill("#contact-name", "Test User");
    await page.fill("#contact-email", "invalid-email");
    await page.fill("#contact-phone", "555-1234");
    await page.fill("#contact-message", "This is a test message that is long enough.");
    await page.click('button[type="submit"]');
    await expect(page.locator(".form-error-text").first()).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("all main pages load", async ({ page }) => {
    const pages = ["/", "/about", "/contact", "/blog", "/financing", "/case-studies", "/service-areas"];
    for (const path of pages) {
      await page.goto(path);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("blog pages load", async ({ page }) => {
    const blogPages = ["/blog/solar-cost-guide", "/blog/battery-storage-guide", "/blog/solar-tax-credits", "/blog/ev-charging-guide"];
    for (const path of blogPages) {
      await page.goto(path);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("service area pages load", async ({ page }) => {
    const cityPages = ["/service-areas/los-angeles", "/service-areas/san-diego", "/service-areas/phoenix", "/service-areas/denver", "/service-areas/austin", "/service-areas/miami"];
    for (const path of cityPages) {
      await page.goto(path);
      await expect(page.locator("main")).toBeVisible();
    }
  });
});

test.describe("Accessibility", () => {
  test("skip link is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".skip-link")).toBeAttached();
  });

  test("main landmark exists", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main")).toBeAttached();
  });

  test("navigation has aria-label", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('nav[aria-label="Main navigation"]')).toBeAttached();
  });
});
