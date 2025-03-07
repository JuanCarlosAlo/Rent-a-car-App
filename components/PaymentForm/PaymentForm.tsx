"use client"

import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styles from './PaymentForm.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Aquí puedes manejar el pago simulado
      alert('Pago simulado realizado con éxito');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.paymentForm}>
      <CardElement className={styles.cardElement} />
      <button type="submit" className={styles.paymentButton} disabled={!stripe}>
        Pagar
      </button>
    </form>
  );
};

export default PaymentForm;