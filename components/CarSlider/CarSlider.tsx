"use client";

import {
  CarCard,
  CarDetails,
  CarImage,
  PriceTag,
  SliderContainer,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { MAIN_COLORS } from "@/lib/COLORS";
import MainButton from "../MainButton/MainButton";
import { useFetch } from "@/hooks/useFetch";
import { Car } from "@/types/car";


SwiperCore.use([Autoplay, Navigation, Pagination]);

const CarSlider = () => {
 
  const {
    data: carsOnSale,
    loading,
    error,
  } = useFetch<Car[]>("/api/cars/onSale");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!carsOnSale) return <h1>Ther is no cars on sale right now</h1>;

  return (
    <SliderContainer>
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
            <CarCard>
              <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
              <CarDetails>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <p>{car.trimLevel}</p>
              </CarDetails>
              <PriceTag>
                {`${car.price} ${car.divisa}s`}
                <span> / mes</span>
              </PriceTag>
              <MainButton
                url={`/vehicles/${car.id}`}
                color={MAIN_COLORS.PRIMARY}
                bgColor={MAIN_COLORS.SECONDARY}
              >
                Mas informacion
              </MainButton>
            </CarCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};
export default CarSlider;
