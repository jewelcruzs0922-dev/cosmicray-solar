import { describe, it, expect } from "vitest";
import { contactFormSchema, newsletterSchema } from "@/lib/validations";

describe("contactFormSchema", () => {
  it("accepts valid data", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      message: "I would like a solar quote for my home.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty name", () => {
    const result = contactFormSchema.safeParse({
      name: "",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      message: "I would like a solar quote for my home.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "not-an-email",
      phone: "+1 (555) 123-4567",
      message: "I would like a solar quote for my home.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      message: "Hi",
    });
    expect(result.success).toBe(false);
  });

  it("accepts optional subject", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      subject: "residential",
      message: "I would like a solar quote for my home.",
    });
    expect(result.success).toBe(true);
  });
});

describe("newsletterSchema", () => {
  it("accepts valid email", () => {
    const result = newsletterSchema.safeParse({ email: "john@example.com" });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = newsletterSchema.safeParse({ email: "not-email" });
    expect(result.success).toBe(false);
  });
});
