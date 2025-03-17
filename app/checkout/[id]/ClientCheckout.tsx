'use client';

import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent } from "@/lib/paymentIntent";
import PaymentDetails from "@/components/PaymentDetails/PaymentDetails";
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { Car } from "@/types/car";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const ClientCheckout = ({ car }: { car: Car }) => {
  const [clientSecret, setClientSecret] = useState<string | null>('');

  const initiatePayment = async () => {
    const paymentIntent = await createPaymentIntent(car);
    setClientSecret(paymentIntent.client_secret);
  };

  return (
    <div>
      <PaymentDetails car={car} initiatePayment={initiatePayment} />
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default ClientCheckout;
