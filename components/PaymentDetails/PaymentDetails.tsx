"use client";

import React from "react";
import MainButton from "../MainButton/MainButton";
import { Car } from "@/types/car";
import styles from "./PaymentDetails.module.scss";
import Image from "next/image";

const PaymentDetails = ({
  car,
  initiatePayment,
}: {
  car: Car;
  initiatePayment: () => void;
}) => {
  return (
    <div className={styles.paymentContainer}>
      <h1>Checkout</h1>
      <div className={styles.carDetails}>
        <Image
          src={car.cover}
          alt={`${car.brand} ${car.model}`}
          className={styles.carImage}
          width={500}
          height={300}
        />
        <p>
          <strong>Marca:</strong> {car.brand}
        </p>
        <p>
          <strong>Modelo:</strong> {car.model}
        </p>
        <p>
          <strong>Año:</strong> {car.year}
        </p>
        <p>
          <strong>Precio:</strong> {car.price} {car.divisa}
        </p>
        <p>
          <strong>Transmisión:</strong> {car.transmition}
        </p>
        <p>
          <strong>Combustible:</strong> {car.fuel}
        </p>
        <p>
          <strong>Capacidad del motor:</strong> {car.engineCapacity} cc
        </p>
        <p>
          <strong>Puertas:</strong> {car.doors}
        </p>
        <p>
          <strong>Capacidad de pasajeros:</strong> {car.passengerCapacity}
        </p>
        <p>
          <strong>Consumo de combustible:</strong> {car.fuelConsumption}
        </p>
        <p>
          <strong>Ubicación:</strong> {car.location}
        </p>
        <p>
          <strong>Condición:</strong> {car.condition}
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <MainButton onClick={initiatePayment} color="primary">
          Aceptar
        </MainButton>
        <MainButton url="/vehicles" color="secondary">
          Cancelar
        </MainButton>
      </div>
    </div>
  );
};

export default PaymentDetails;