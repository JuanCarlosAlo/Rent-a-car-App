import React from 'react';
import { CAR_LIST } from '../../lib/carPh'; 
import Link from 'next/link';
import {
  CarListContainer,
  CarCard,
  CarImage,
  CarInfo,
  CarDetails,
  PriceTag,
  OfferBadge,
  CarAttributes,
  CarAttribute,
  NameModelContainer,
  CarName,
} from './styles'; 

const CarList = () => {
  return (
    <CarListContainer>
      {CAR_LIST.map((car) => (
        <CarCard key={car._id}>
          {car.isOnsale && <OfferBadge>¡Oferta!</OfferBadge>}
          <Link href={`/vehicles/${car._id}`}>
            <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
          </Link>
          <CarInfo>
            <h4>{car.mileage > 0 ? 'Usado' : 'Nuevo'}</h4>
            <NameModelContainer>
              <CarName>{`${car.brand} ${car.model}`}</CarName>
              <PriceTag>{`${car.price} ${car.divisa}s`} <br /> / mes</PriceTag>
            </NameModelContainer>
            <p>{car.engineCapacity} {car.trimLevel}</p>
            <CarDetails>
              <CarAttributes>
                <CarAttribute>{car.transmition}</CarAttribute>
                <CarAttribute>{car.fuel}</CarAttribute>
                <CarAttribute>{car.bodyType}</CarAttribute>
              </CarAttributes>
              
            </CarDetails>
          </CarInfo>
        </CarCard>
      ))}
    </CarListContainer>
  );
};

export default CarList;
