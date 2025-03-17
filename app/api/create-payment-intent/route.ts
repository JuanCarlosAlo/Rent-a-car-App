import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount, // por ejemplo 2000 para 20.00€
      currency: 'eur',
      payment_method_types: ['card'],
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error creando PaymentIntent' }, { status: 500 });
  }
}
