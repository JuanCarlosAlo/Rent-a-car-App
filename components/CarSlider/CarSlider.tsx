import { CAR_LIST } from "@/lib/carPh";
import { CarDetails, CarImage, PriceTag, SliderContainer } from "./styles";

const CarSlider = () => {
    const carsOnSale = CAR_LIST.filter(car => car.isOnsale);

    const carsToShow = carsOnSale.length > 0 
      ? carsOnSale 
      : CAR_LIST.sort(() => 0.5 - Math.random()).slice(0, 5); 
  
      return (
        <SliderContainer>
          {carsToShow.map(car => (
            <div key={car._id}>
              <CarImage src={car.cover} alt={`${car.brand} ${car.model}`} />
              <CarDetails>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <p>{car.trimLevel}</p>
                <PriceTag>{`${car.price} ${car.divisa} / mes`}</PriceTag>
              </CarDetails>
            </div>
          ))}
        </SliderContainer>
      );
    };
  
  export default CarSlider;