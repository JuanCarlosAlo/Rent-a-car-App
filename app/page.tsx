
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Steps from "@/components/Steps/Steps";
import BrandsGrid from "@/components/BrandsGrid/BrandsGrid";
import CarSliderWrapper from "@/components/CarSlider/CarSliderWrapper";
import { fetchCarsOnSale } from "@/hooks/carsOnSale";
import { Car } from "@/types/car";
import CarSlider from "@/components/CarSlider/CarSlider";

export default async function Home() {
  const carsOnSale: Car[] = await fetchCarsOnSale();
  return (
    <>
      <Hero />
      <CarSlider carsOnSale={carsOnSale} />
      <Info />
      <Steps />
      <BrandsGrid />
    </>
  );
}
