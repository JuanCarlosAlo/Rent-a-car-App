"use client"

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '@/components/PaymentForm/PaymentForm';
import styles from './Payment.module.scss';
import MainContent from '@/components/MainContent/MainContent';

// Cargar la clave pública de Stripe


const Payment = () => {
 

  return (
    <MainContent>
    <div className={styles.paymentContainer}>
      <h2>Detalles del Pago</h2>
  
    </div>
    </MainContent>
  );
};

export default Payment;