import { NextResponse } from "next/server";
import { z } from "zod";

const scheduleSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  date: z.string().min(1),
  time: z.string().min(1),
  type: z.enum(["assessment", "consultation", "installation"]),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = scheduleSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, date, time, type } = result.data;

    // In production: create Calendly event, send to CRM, etc.
    // For now, store in a simple log or send to Formspree

    const appointmentType = {
      assessment: "Free Solar Assessment",
      consultation: "Financing Consultation",
      installation: "Installation Planning",
    }[type];

    // Send confirmation email
    // await sendEmail({
    //   to: email,
    //   subject: `Appointment Confirmed: ${appointmentType}`,
    //   template: "appointment-confirmation",
    //   data: { name, date, time, type: appointmentType },
    // });

    return NextResponse.json({
      success: true,
      message: "Appointment scheduled",
      appointment: {
        type: appointmentType,
        date,
        time,
        name,
        email,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
