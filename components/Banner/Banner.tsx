import React from "react";
import { CAR_LIST } from "../../lib/carPh";
import Link from "next/link";
import { BannerContainer, BannerImage, BannerTextWrap, BannerButton } from "./styles";

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
          <Link href={`/vehicles/${car._id}`}>
            <BannerButton>Ver Detalles</BannerButton>
          </Link>
        </BannerTextWrap>
        <BannerImage src={car.cover} alt={`${car.brand} ${car.model}`} />
      </BannerContainer>
    </section>
  );
};

export default Banner;
