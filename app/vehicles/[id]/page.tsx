'use client';

import { useFetch } from '@/hooks/useFetch';
import styles from './CarDetailsPage.module.scss';
import MainContent from '@/components/MainContent/MainContent';
import { Slider } from '@/components/ImageSlider/ImageSlider';
import MainButton from '@/components/MainButton/MainButton';
import { Car } from '@/types/car';

const CarDetailsPage = ({ params: { id } }: { params: { id: string } }) => {
  const { data: car, loading, error } = useFetch<Car>(`/api/cars/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <h1>Coche no encontrado</h1>;

  return (
    <MainContent>
      <div className={styles.carDetailContainer}>
        <div className={styles.carDetails}>
          <div className={styles.detailSection}>
            <h1 className={styles.detailTitle}>
              {`${car.brand} ${car.model} ${car.year}`}
            </h1>
            <div className={styles.priceSection}>
              <h2>{`${car.price} ${car.divisa} / mes`}</h2>
            </div>
          </div>

          <div className={styles.detailSection}>
            <p>{car.description}</p>
            <ul>
              <li>
                <strong>Combustible:</strong> {car.fuel}
              </li>
              <li>
                <strong>Transmisión:</strong> {car.transmition}
              </li>
              <li>
                <strong>Tipo:</strong> {car.bodyType}
              </li>
              <li>
                <strong>Capacidad del motor:</strong> {car.engineCapacity}
              </li>
              <li>
                <strong>Color:</strong> {car.color}
              </li>
              <li>
                <strong>Condición:</strong> {car.condition}
              </li>
              <li>
                <strong>Disponibilidad:</strong>{' '}
                {new Date(car.availabilityDate).toLocaleDateString()}
              </li>
            </ul>
          </div>

          <MainButton
            onClick={() => console.log('Alquilar el coche')}
            color="secondary"
          >
            Alquilar por {car.price} {car.divisa} / mes
          </MainButton>
        </div>

        <Slider images={car.images.map((image) => image.url)} />
      </div>
    </MainContent>
  );
};

export default CarDetailsPage;
