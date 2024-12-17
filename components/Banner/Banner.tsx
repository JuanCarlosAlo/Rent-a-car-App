import React from "react";
import { CAR_LIST } from "../../lib/carPh";

import { BannerContainer, BannerImage, BannerTextWrap } from "./styles";
import MainButton from "../MainButton/MainButton";
import { MAIN_COLORS } from "@/lib/COLORS";

const getRandomCar = () => {
  const randomIndex = Math.floor(Math.random() * CAR_LIST.length);
  return CAR_LIST[randomIndex];
};

const Banner = () => {
  const carOnSale = CAR_LIST.find(car => car.isOnsale);
  const car = carOnSale || getRandomCar();

  return (
    <section>
      <BannerContainer>
        <BannerTextWrap>
          <h1>{`Tu ${car.model} al precio mas bajo`}</h1>
          <p>{car.brand} {car.model} {car.engineCapacity} {car.trimLevel}</p>
          <MainButton onClick={() => console.log('Mas info')} color={MAIN_COLORS.SECONDARY} bgColor={MAIN_COLORS.PRIMARY}>
            Ver Detalles
          </MainButton>
        </BannerTextWrap>
        <BannerImage src={car.cover} alt={`${car.brand} ${car.model}`} />
      </BannerContainer>
    </section>
  );
};

export default Banner;
