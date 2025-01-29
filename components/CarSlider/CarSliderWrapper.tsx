import { fetchCarsOnSale } from "@/hooks/carsOnSale";
import { Car } from "@/types/car";
import CarSlider from "./CarSlider";

const CarSliderWrapper = async () => {
   const carsOnSale: Car[] = await fetchCarsOnSale(); 
  
    
  return <CarSlider carsOnSale={carsOnSale} />;
 };

 export default CarSliderWrapper;
