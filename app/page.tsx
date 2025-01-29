import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Steps from "@/components/Steps/Steps";
import BrandsGrid from "@/components/BrandsGrid/BrandsGrid";
import CarSliderWrapper from "@/components/CarSlider/CarSliderWrapper";


export default async function Home() {
 
  
  return (
    <>
      <Hero />
      <CarSliderWrapper />
      <Info />
      <Steps />
      <BrandsGrid />
    </>
  );
}
