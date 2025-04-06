"use client";

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import styles from "./PaymentForm.module.scss";


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/checkout/success", 
      },
    });

    if (result.error) {
      setError(result.error.message || "Error al procesar el pago");
    }

    setLoading(false);
  };

  return (
    <section className={styles.paymentContainer}>
      <form onSubmit={handleSubmit} className={styles.paymentForm}>
        <PaymentElement />
        <button type="submit" className={styles.paymentButton} disabled={loading || !stripe || !elements}>
          {loading ? "Procesando..." : "Pagar"}
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </section>
  );
};

export default PaymentForm;
