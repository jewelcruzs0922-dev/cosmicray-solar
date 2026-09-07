import { NextResponse } from "next/server";
import Stripe from "stripe";

interface CheckoutItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY not configured");
  return new Stripe(key, { apiVersion: "2026-08-26.dahlia" });
}

export async function POST(request: Request) {
  try {
    const { items }: { items: CheckoutItem[] } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.cosmicray.com"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.cosmicray.com"}/checkout/cancel`,
      metadata: { orderType: "solar_equipment" },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch {
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
