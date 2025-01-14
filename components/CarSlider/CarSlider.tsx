"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { MAIN_COLORS } from '@/lib/COLORS';
import MainButton from '../MainButton/MainButton';
import { useFetch } from '@/hooks/useFetch';
import { Car } from '@/types/car';
import DataFetcher from '../DataFetcher/DataFetcher'; 
import styles from './CarSlider.module.scss';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const CarSlider = () => {
  const { data: carsOnSale, loading, error } = useFetch<Car[]>("/api/cars/onSale");

  return (
    <div className={styles.sliderContainer}>
      <DataFetcher<Car[]>
        data={carsOnSale}
        loading={loading}
        error={error}
      >
        {(cars) => (
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
            {cars.map((car) => (
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
                  <MainButton
                    url={`/vehicles/${car.id}`}
                    color={MAIN_COLORS.PRIMARY}
                    bgColor={MAIN_COLORS.SECONDARY}
                  >
                    Más información
                  </MainButton>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </DataFetcher>
    </div>
  );
};

export default CarSlider;
