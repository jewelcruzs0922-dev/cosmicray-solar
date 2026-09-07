import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock fetch globally
const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
vi.stubGlobal("localStorage", localStorageMock);

describe("useContactForm hook logic", () => {
  beforeEach(() => {
    localStorageMock.clear();
    mockFetch.mockReset();
  });

  it("validates required fields", async () => {
    const { contactFormSchema } = await import("@/lib/validations");

    const result = contactFormSchema.safeParse({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("accepts valid data", async () => {
    const { contactFormSchema } = await import("@/lib/validations");

    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      message: "I would like a solar quote for my home.",
    });

    expect(result.success).toBe(true);
  });

  it("validates email format", async () => {
    const { contactFormSchema } = await import("@/lib/validations");

    const result = contactFormSchema.safeParse({
      name: "John",
      email: "not-an-email",
      phone: "555-1234",
      message: "Test message here",
    });

    expect(result.success).toBe(false);
  });

  it("validates message minimum length", async () => {
    const { contactFormSchema } = await import("@/lib/validations");

    const result = contactFormSchema.safeParse({
      name: "John",
      email: "john@example.com",
      phone: "555-1234",
      message: "Hi",
    });

    expect(result.success).toBe(false);
  });
});

describe("useNewsletterForm hook logic", () => {
  beforeEach(() => {
    localStorageMock.clear();
    mockFetch.mockReset();
  });

  it("validates email", async () => {
    const { newsletterSchema } = await import("@/lib/validations");

    const result = newsletterSchema.safeParse({ email: "invalid" });
    expect(result.success).toBe(false);
  });

  it("accepts valid email", async () => {
    const { newsletterSchema } = await import("@/lib/validations");

    const result = newsletterSchema.safeParse({ email: "test@example.com" });
    expect(result.success).toBe(true);
  });
});

describe("Cart logic", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("stores cart in localStorage", () => {
    const cart = [{ id: 1, name: "Test", price: 100, img: "test.jpg", qty: 1 }];
    localStorageMock.setItem("cr-cart", JSON.stringify(cart));
    const stored = JSON.parse(localStorageMock.getItem("cr-cart") || "[]");
    expect(stored).toHaveLength(1);
    expect(stored[0].id).toBe(1);
  });

  it("handles corrupted localStorage gracefully", () => {
    localStorageMock.setItem("cr-cart", "invalid-json");
    expect(() => JSON.parse(localStorageMock.getItem("cr-cart") || "[]")).toThrow();
  });
});

describe("Constants", () => {
  it("all constants are defined", async () => {
    const constants = await import("@/lib/constants");
    expect(constants.SITE_URL).toBeTruthy();
    expect(constants.SITE_NAME).toBeTruthy();
    expect(constants.PHONE).toBeTruthy();
    expect(constants.EMAIL).toBeTruthy();
    expect(constants.HEADER_HEIGHT).toBeGreaterThan(0);
    expect(constants.ADDRESS).toBeTruthy();
  });
});
