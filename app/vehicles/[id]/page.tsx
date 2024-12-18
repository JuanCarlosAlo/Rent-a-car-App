import { CAR_LIST } from '../../../lib/carPh';
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


const CarDetailsPage = ({ params: { id } }: { params: { id: string } }) => {
  const car = CAR_LIST.find((car) => car._id === parseInt(id));

  if (!car) {
    return <h1>Coche no encontrado</h1>;
  }

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
            </ul>
          </DetailSection>

          <MainButton onClick={()=> console.log('alquilar el coche')}
          color={MAIN_COLORS.PRIMARY}
          bgColor={MAIN_COLORS.SECONDARY}

          >
            Alquilar por {car.price} {car.divisa} / mes
          </MainButton>
        </CarDetails>

        <Slider images={car.imgs} />

        
      </CarDetailContainer>

      
    </MainContent>
  );
};

export default CarDetailsPage;