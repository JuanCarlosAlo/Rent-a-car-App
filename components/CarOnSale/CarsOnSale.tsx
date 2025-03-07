import React from "react";
import { Car } from "@/types/car";
import { fetchCarsOnSale } from "@/hooks/carsOnSale";

import styles from "./CarsOnSale.module.scss";
import CarSlider from "../CarSliderCard/CarSlider";

const CarsOnSale = async () => {
  let carsOnSale: Car[] = [];
  try {
    carsOnSale = await fetchCarsOnSale();
  } catch (error) {
    console.error('Failed to fetch cars on sale:', error);
  }

  if (!carsOnSale || carsOnSale.length === 0) {
    return <p>No hay coches en oferta actualmente.</p>;
  }

  return (
    <div className={styles.sliderContainer}>
      <CarSlider carsOnSale={carsOnSale} />
    </div>
  );
};

export default CarsOnSale;