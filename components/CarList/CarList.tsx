"use client";

import React from "react";
import Link from "next/link";
import styles from "./CarList.module.scss";
import { Car } from "@/types/car";
import Image from "next/image";

const CarList = ({ cars }: { cars: Car[] }) => {
  return (
    <div className={styles.carListContainer}>
      {cars.map((car) => (
        <div key={car.id} className={styles.carCard}>
          {car.isOnsale && <span className={styles.offerBadge}>¡Oferta!</span>}
          <Link href={`/vehicles/${car.id}`} prefetch>
            <Image
              className={styles.carImage}
              src={car.cover}
              alt={`${car.brand} ${car.model}`}
              width={500}
              height={300}
              quality={75}
            />
          </Link>
          <div className={styles.carInfo}>
            <h4>{car.mileage > 0 ? "Usado" : "Nuevo"}</h4>
            <div className={styles.nameModelContainer}>
              <h3 className={styles.carName}>{`${car.brand} ${car.model}`}</h3>
              <h4
                className={styles.priceTag}
              >{`${car.price} ${car.divisa}s / mes`}</h4>
            </div>
            <p>
              {car.engineCapacity} {car.trimLevel}
            </p>
            <div className={styles.carDetails}>
              <div className={styles.carAttributes}>
                <span className={styles.carAttribute}>{car.transmition}</span>
                <span className={styles.carAttribute}>{car.fuel}</span>
                <span className={styles.carAttribute}>{car.bodyType}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
