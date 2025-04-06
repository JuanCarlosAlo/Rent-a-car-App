import React from "react";

import { fetchCarsOnSale } from "@/hooks/carsOnSale";

import styles from "./CarsOnSale.module.scss";
import CarSlider from "../CarSliderCard/CarSlider";

const CarsOnSale = async () => {

  const carsOnSale = await fetchCarsOnSale();
 
  if (!carsOnSale || carsOnSale.length === 0) {
    return <p>No hay coches en oferta actualmente.</p>;
  } else {
    return (
      <div className={styles.sliderContainer}>
        <CarSlider carsOnSale={carsOnSale} />
      </div>
    );
  }
};

export default CarsOnSale;
