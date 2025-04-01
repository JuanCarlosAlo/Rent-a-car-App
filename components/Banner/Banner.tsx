"use client";

import React from "react";
import styles from "./Banner.module.scss";
import MainButton from "../MainButton/MainButton";

import { Car } from "@/types/car";

import Image from "next/image";

const Banner = ({ car }: { car: Car }) => {
  return (
    <section>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTextWrap}>
          <h1>{`Tu ${car.model} al precio más bajo`}</h1>
          <p>{`${car.brand} ${car.model} ${car.engineCapacity} ${car.trimLevel}`}</p>
          <MainButton url={`/vehicles/${car.id}`} color="secondary">
            Ver Detalles
          </MainButton>
        </div>
        <Image
          className={styles.bannerImage}
          src={car.cover}
          alt={`${car.brand} ${car.model}`}
          width={750}
          height={340}
        />
      </div>
    </section>
  );
};

export default Banner;
