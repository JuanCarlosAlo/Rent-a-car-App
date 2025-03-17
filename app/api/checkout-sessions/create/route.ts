// /app/api/checkout-sessions/create/route.ts (Next.js 13/14 - App Router)
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2025-02-24.acacia',
});

export async function POST(req: Request) {
  const { body } = req;
  
  try {
    const paymentIntent = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Alquiler de coche',
            },
            unit_amount: 2000, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout',
      cancel_url: 'http://localhost:3000/cancel',
    });

    return NextResponse.json(paymentIntent);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
