'use client';
import React from 'react'
import MainButton from '../MainButton/MainButton'
import { Car } from '@/types/car'
import styles from './CarInfoDetails.module.scss';
import useAuth from '@/hooks/useAuth';





const CarInfoDetails = ({car}:{car: Car}) => {

  const { handleRedirect } = useAuth(car.id);
  
  const handleCheckout = async () => {
    const response = await fetch('http://localhost:3000/api/checkout-sessions/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     
    });
  
    const data = await response.json();
  
    if (data?.url) {
    
      handleRedirect();
    } else {
      console.error('No se pudo obtener la URL de checkout.');
    }
  };
  return (
    <div className={styles.carDetails}>
    <div className={styles.detailSection}>
      <h1 className={styles.detailTitle}>
        {`${car.brand} ${car.model} ${car.year}`}
      </h1>
      <div className={styles.priceSection}>
        <h2>{`${car.price} ${car.divisa} / mes`}</h2>
      </div>
    </div>

    <div className={styles.detailSection}>
      <p>{car.description}</p>
      <ul>
        <li>
          <strong>Combustible:</strong> {car.fuel}
        </li>
        <li>
          <strong>Transmisión:</strong> {car.transmition}
        </li>
        <li>
          <strong>Tipo:</strong> {car.bodyType}
        </li>
        <li>
          <strong>Capacidad del motor:</strong> {car.engineCapacity}
        </li>
        <li>
          <strong>Color:</strong> {car.color}
        </li>
        <li>
          <strong>Condición:</strong> {car.condition}
        </li>
        <li>
          <strong>Disponibilidad:</strong>{' '}
          {new Date(car.availabilityDate).toLocaleDateString()}
        </li>
      </ul>
    </div>

    <MainButton
     
      color="secondary"
      onClick={handleCheckout}
    >
      Alquilar por {car.price} {car.divisa} / mes
    </MainButton>
  </div>

  )
}

export default CarInfoDetails