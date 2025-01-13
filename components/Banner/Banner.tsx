'use client'

import React from "react";


import { BannerContainer, BannerImage, BannerTextWrap } from "./styles";
import MainButton from "../MainButton/MainButton";
import { MAIN_COLORS } from "@/lib/COLORS";
import { useFetch } from "@/hooks/useFetch";
import { Car } from "@/types/car";

const getRandomCar = (carsOnSale:Car[]) => {
  const randomIndex = Math.floor(Math.random() * carsOnSale.length);
  return carsOnSale[randomIndex];
};

const Banner = () => {

  const {
    data: carsOnSale,
    loading,
    error,
  } = useFetch<Car[]>("/api/cars/onSale");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!carsOnSale) return <h1>Ther is no cars on sale right now</h1>;

  const car =  getRandomCar(carsOnSale);

  return (
    <section>
      <BannerContainer>
        <BannerTextWrap>
          <h1>{`Tu ${car.model} al precio mas bajo`}</h1>
          <p>{car.brand} {car.model} {car.engineCapacity} {car.trimLevel}</p>
          <MainButton url={`/vehicles/${car.id}`} color={MAIN_COLORS.SECONDARY} bgColor={MAIN_COLORS.PRIMARY}>
            Ver Detalles
          </MainButton>
        </BannerTextWrap>
        <BannerImage src={car.cover} alt={`${car.brand} ${car.model}`} />
      </BannerContainer>
    </section>
  );
};

export default Banner;
