import styles from './CarDetailsPage.module.scss';
import MainContent from '@/components/MainContent/MainContent';
import { Slider } from '@/components/ImageSlider/ImageSlider';
import { fetchCarById } from '@/hooks/carsOnSale';
import CarInfoDetails from '@/components/CarInfoDetails/CarInfoDetails';

const CarDetailsPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarById(params.id);
  return (
    <MainContent>
      <div className={styles.carDetailContainer}>
        <CarInfoDetails car={car}/>
        <Slider images={car.images.map((image) => image.url)} />
      </div>
    </MainContent>
  );
};

export default CarDetailsPage;
