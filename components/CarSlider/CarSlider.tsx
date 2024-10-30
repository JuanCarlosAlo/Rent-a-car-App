'use client';

import { CAR_LIST } from "@/lib/carPh";
import { Button, CarCard, CarDetails, CarImage, PriceTag, SliderContainer } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Navigation, Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay, Navigation]);


const getCarsToShow = () => {
  const carsOnSale = CAR_LIST.filter(car => car.isOnsale);
  return carsOnSale.length > 0 
    ? carsOnSale 
    : CAR_LIST.sort(() => 0.5 - Math.random()).slice(0, 5); 
};

const CarSlider = () => {
  const carsToShow = getCarsToShow();

  return (
    <SliderContainer>
      <Swiper
        direction="horizontal"
        spaceBetween={20}
        slidesPerView={1.5} 
        centeredSlides={true} 
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        {carsToShow.map((car) => (
          <SwiperSlide key={car._id} style={{ display: 'flex', justifyContent: 'center', gap: '2rem'}}>
            <CarCard>
              <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
              <CarDetails>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <p>{car.trimLevel}</p>
              </CarDetails>
              <PriceTag>{`${car.price} ${car.divisa}`}<span> / mes</span></PriceTag>
              <Button>Encuentra tu coche</Button>
            </CarCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};
export default CarSlider;
