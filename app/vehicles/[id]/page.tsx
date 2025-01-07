'use client'

import { useFetch } from '@/hooks/useFetch';
import {
  CarDetailContainer,
  CarDetails,
  DetailSection,
  DetailTitle,
  PriceSection,
  TransactionButton,
} from './styles';
import MainContent from '@/components/MainContent/MainContent';
import { Slider } from '@/components/ImageSlider/ImageSlider';
import MainButton from '@/components/MainButton/MainButton';
import { MAIN_COLORS } from '@/lib/COLORS';
import { Car } from '@/types/car';

const CarDetailsPage = ({ params: { id } }: { params: { id: string } }) => {

  const { data: car, loading, error } = useFetch<Car>(`/api/cars/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <h1>Coche no encontrado</h1>;

  return (
    <MainContent>
      <CarDetailContainer>

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
              <li><strong>Color:</strong> {car.color}</li>
              <li><strong>Condición:</strong> {car.condition}</li>
              <li><strong>Disponibilidad:</strong> {new Date(car.availabilityDate).toLocaleDateString()}</li>
            </ul>
          </DetailSection>

          <MainButton
            onClick={() => console.log('Alquilar el coche')}
            color={MAIN_COLORS.PRIMARY}
            bgColor={MAIN_COLORS.SECONDARY}
          >
            Alquilar por {car.price} {car.divisa} / mes
          </MainButton>
        </CarDetails>

        {/* Mostrar las imágenes del coche */}
        <Slider images={car.images.map((image) => image.url)} />

      </CarDetailContainer>
    </MainContent>
  );
};

export default CarDetailsPage;
