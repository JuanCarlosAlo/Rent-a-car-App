"use client"

import React from 'react'
import MainButton from '../MainButton/MainButton'
import { Car } from '@/types/car'

const PaymentDetails = ({car,initiatePayment}:{car:Car,initiatePayment: ()=>void}) => {
    
  return (
    <div><h1>Checkout</h1>
    <p>Vas a alquilar: {car.brand} {car.model}</p>
    <p>Precio: {car.price}€</p>
    <div>
      <MainButton onClick={initiatePayment}>Aceptar</MainButton>
      <MainButton url="/vehicles">Cancelar</MainButton>
    </div></div>
  )
}

export default PaymentDetails