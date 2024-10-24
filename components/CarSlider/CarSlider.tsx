// components/CarSlider.tsx
'use client';

import { CAR_LIST } from "@/lib/carPh";
import { CarDetails, CarImage, PriceTag, SliderContainer } from "./styles";
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
        direction={"horizontal"}
        spaceBetween={30} // Espacio entre las cards
        slidesPerView={'auto'} // Permite que se muestren todas las cards posibles
        loop={true} 
        width={350}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        navigation={true} 
      >
        {carsToShow.map((car) => (
          <SwiperSlide key={car._id} style={{ width: 'auto', flex: '0 0 auto' }}>
            <div style={{ width: '300px' }}> 
              <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
              <CarDetails>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <p>{car.trimLevel}</p>
                <PriceTag>{`${car.price} ${car.divisa} / mes`}</PriceTag>
              </CarDetails>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default CarSlider;
