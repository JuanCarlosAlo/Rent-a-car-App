import { CAR_LIST } from '../../../lib/carPh'; 
import styled from 'styled-components';
import {
  CarDetailContainer,
  CarImage,
  CarDetails,
  DetailSection,
  DetailTitle,
  PriceSection,
  TransactionButton,
} from './styles'; 
import MainContent from '@/components/MainContent/MainContent';

const CarDetailsPage = ({ params: { id } }: { params: { id: string } }) => {

  const car = CAR_LIST.find((car) => car._id === parseInt(id));

  if (!car) {
    return <h1>Coche no encontrado</h1>;
  }

  return (
    <MainContent>
    <CarDetailContainer>
      <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
      <CarDetails>
        <DetailSection>
          <DetailTitle>{`${car.brand} ${car.model} ${car.year}`}</DetailTitle>
          <PriceSection>
            <h2>{`${car.price} ${car.divisa}s / mes`}</h2>
          </PriceSection>
        </DetailSection>

        <DetailSection>
          <p>{car.description}</p>
          <ul>
            <li><strong>Combustible:</strong> {car.fuel}</li>
            <li><strong>Transmisión:</strong> {car.transmition}</li>
            <li><strong>Tipo:</strong> {car.bodyType}</li>
            <li><strong>Capacidad del motor:</strong> {car.engineCapacity}</li>
          </ul>
        </DetailSection>

        <TransactionButton>
          Alquilar por {car.price} {car.divisa} / mes
        </TransactionButton>
      </CarDetails>
    </CarDetailContainer>
    </MainContent>
  );
};

export default CarDetailsPage;
