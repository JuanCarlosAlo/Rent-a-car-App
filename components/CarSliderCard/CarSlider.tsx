"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Car } from "@/types/car";
import MainButton from "../MainButton/MainButton";
import styles from "./CarSlider.module.scss";
import Image from "next/image";

SwiperCore.use([Autoplay, Navigation, Pagination]);

interface CarSliderProps {
  carsOnSale?: Car[];
  images?: string[];
}

const CarSlider = ({ carsOnSale, images }: CarSliderProps) => {
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={50}
      slidesPerView={carsOnSale ? 3 : 1}
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
      {carsOnSale
        ? carsOnSale.map((car) => (
            <SwiperSlide key={car.id}>
              <div className={styles.carCard}>
                <Image
                  className={styles.carImage}
                  src={car.cover}
                  alt={`${car.brand} ${car.model}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  quality={75}
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
          ))
        : images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.carCard}>
                <Image
                  className={styles.carImage}
                  src={image}
                  alt={`Car image ${index + 1}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  quality={75}
                />
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default CarSlider;