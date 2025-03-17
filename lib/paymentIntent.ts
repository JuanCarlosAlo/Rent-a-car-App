"use server";

import Stripe from "stripe";
import { Car } from '@/types/car';

export const createPaymentIntent = async (car: Car) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: '2024-04-10', 
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: car.price , 
    currency: "eur",
    metadata: {
      carId: car.id.toString(),
      brand: car.brand,
      model: car.model
    },
  });

  return paymentIntent;
};
