"use client";

import React from "react";
import styles from "./Banner.module.scss";
import MainButton from "../MainButton/MainButton";
import { MAIN_COLORS } from "@/lib/COLORS";
import { useFetch } from "@/hooks/useFetch";
import { Car } from "@/types/car";
import DataFetcher from "../DataFetcher/DataFetcher";

const Banner = () => {
  const { data: car, loading, error } = useFetch<Car>("/api/cars/onSale/random");

  return (
    <section>
      <div className={styles.bannerContainer}>
        <DataFetcher<Car>
          data={car}
          loading={loading}
          error={error}
        >
          {(car) => (
            <>
              <div className={styles.bannerTextWrap}>
                <h1>{`Tu ${car.model} al precio más bajo`}</h1>
                <p>{`${car.brand} ${car.model} ${car.engineCapacity} ${car.trimLevel}`}</p>
                <MainButton
                  url={`/vehicles/${car.id}`}
                  color="secondary"

                >
                  Ver Detalles
                </MainButton>
              </div>
              <img className={styles.bannerImage} src={car.cover} alt={`${car.brand} ${car.model}`} />
            </>
          )}
        </DataFetcher>
      </div>
    </section>
  );
};

export default Banner;
