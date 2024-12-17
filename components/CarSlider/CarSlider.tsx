'use client';

import { CAR_LIST } from "@/lib/carPh";
import { Button, CarCard, CarDetails, CarImage, PriceTag, SliderContainer } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { MAIN_COLORS } from "@/lib/COLORS";
import MainButton from "../MainButton/MainButton";

SwiperCore.use([Autoplay, Navigation, Pagination]); 


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
        
        style={{padding: '2rem'}}
      >
        {carsToShow.map((car) => (
          <SwiperSlide key={car._id} >
            <CarCard>
              <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
              <CarDetails>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <p>{car.trimLevel}</p>
              </CarDetails>
              <PriceTag>{`${car.price} ${car.divisa}s`}<span> / mes</span></PriceTag>
              <MainButton onClick={() => console.log('Navegando a la página de coches')} color={MAIN_COLORS.PRIMARY} bgColor={MAIN_COLORS.SECONDARY}>
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
