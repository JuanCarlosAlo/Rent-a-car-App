import React from 'react';
import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import styles from './PaymentForm.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    console.log(event)

  }
 /*  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!stripe || !elements) return;
  
    // Crear PaymentIntent desde tu API
    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 2000 }) // 20.00 EUR
    });
  
    const { clientSecret } = await res.json();
  
    // Confirmar pago con Stripe.js
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });
  
    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        console.log('¡Pago exitoso!');
        alert('Pago de prueba realizado correctamente');
      }
    }
  }; */
  

  return (
    <form onSubmit={handleSubmit} className={styles.paymentForm}>
      <PaymentElement />
      <button type="submit" className={styles.paymentButton} >
        Pagar
      </button>
    </form>
  );
};

export default PaymentForm;