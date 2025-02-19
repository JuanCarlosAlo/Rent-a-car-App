// components/CarSlider/CarSlider.tsx

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Car } from "@/types/car";
import MainButton from "../MainButton/MainButton";
import styles from "./CarSlider.module.scss";

SwiperCore.use([Autoplay, Navigation, Pagination]);

interface CarSliderProps {
  carsOnSale: Car[];
}

const CarSlider = ({ carsOnSale }:CarSliderProps) => {
  if (!carsOnSale || carsOnSale.length === 0) {
    return <p>No hay coches en oferta actualmente.</p>;
  }

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        direction="horizontal"
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        style={{ padding: "2rem" }}
      >
        {carsOnSale.map((car) => (
          <SwiperSlide key={car.id}>
            <div className={styles.carCard}>
              <img
                className={styles.carImage}
                src={car.cover}
                alt={`${car.brand} ${car.model}`}
              />
              <div className={styles.carDetails}>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <p>{car.trimLevel}</p>
              </div>
              <div className={styles.priceTag}>
                {`${car.price} ${car.divisa}s`}
                <span> / mes</span>
              </div>
              <MainButton url={`/vehicles/${car.id}`} color="secondary">
                Más información
              </MainButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarSlider;
