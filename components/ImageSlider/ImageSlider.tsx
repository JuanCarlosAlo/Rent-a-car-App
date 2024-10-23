'use client'
import { useState } from "react";
import {SliderContainer,SlideWrapper,Slide,NavigationButton} from './styles'

export const Slider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <SliderContainer>
        <SlideWrapper $translateX={-currentIndex * 100}>
          {images.map((image, index) => (
            <Slide
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </SlideWrapper>
        <NavigationButton onClick={prevSlide}>‹</NavigationButton>
        <NavigationButton onClick={nextSlide}>›</NavigationButton>
      </SliderContainer>
    );
  };
  