"use server";

import { Car } from "@/types/car";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia", 
});

export const createPaymentIntent = async (car: Car) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: car.price,
    currency: "eur",
    automatic_payment_methods: { enabled: true }, 
    metadata: {
      carId: car.id.toString(),
    },
  });

  return paymentIntent;
};