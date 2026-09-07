"use client";

import { useState, useCallback } from "react";
import { FORMSPREE_CONTACT_ID } from "@/lib/constants";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;
type FormStatus = "idle" | "sending" | "sent" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = useCallback((name: string, value: string) => {
    const fieldSchema = contactFormSchema.shape[name as keyof ContactFormData];
    if (!fieldSchema) return;
    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      setErrors((prev) => ({ ...prev, [name]: result.error.issues[0]?.message }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const result = contactFormSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject") || undefined,
      message: data.get("message"),
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", { event_category: "contact_form", event_label: "quote_request" });
        }
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  }, []);

  return { status, errors, validateField, handleSubmit };
}
