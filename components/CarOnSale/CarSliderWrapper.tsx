import { fetchCarsOnSale } from "@/hooks/carsOnSale";
import { Car } from "@/types/car";
import CarSlider from "./CarsOnSale";

export default async function CarSliderWrapper() {
  const carsOnSale: Car[] = await fetchCarsOnSale();
  

  return <CarSlider carsOnSale={carsOnSale} />;
}
