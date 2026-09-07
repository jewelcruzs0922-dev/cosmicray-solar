import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    // Send to Formspree
    const formspreeRes = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message, _subject: `New Quote Request from ${name}` }),
      }
    );

    if (!formspreeRes.ok) {
      throw new Error("Formspree submission failed");
    }

    // Send confirmation email (via Resend/SendGrid/etc.)
    // await sendEmail({
    //   to: email,
    //   subject: "Thank you for contacting Cosmic Ray Solar",
    //   template: "contact-confirmation",
    //   data: { name },
    // });

    // Send notification to team
    // await sendEmail({
    //   to: "team@cosmicray.com",
    //   subject: `New Quote Request from ${name}`,
    //   template: "new-lead",
    //   data: { name, email, phone, subject, message },
    // });

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
