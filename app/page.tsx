import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Steps from "@/components/Steps/Steps";
import BrandsGrid from "@/components/BrandsGrid/BrandsGrid";
import CarSlider from "@/components/CarOnSale/CarsOnSale";

export default function Home() {
  return (
    <>
      <Hero />
      <CarSlider />
      <Info />
      <Steps />
      <BrandsGrid />
    </>
  );
}
