"use client";

import { useState, useCallback } from "react";
import { newsletterSchema } from "@/lib/validations";
import { FORMSPREE_NEWSLETTER_ID } from "@/lib/constants";

type NewsletterStatus = "idle" | "sending" | "sent" | "error";

export function useNewsletterForm() {
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email") as string;

    const result = newsletterSchema.safeParse({ email });
    if (!result.success) {
      setStatus("error");
      return;
    }

    data.append("_subject", "New Newsletter Subscriber");
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_NEWSLETTER_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, []);

  return { status, handleSubmit };
}
