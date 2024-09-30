import React from 'react';
import { HeroContainer, HeroTitle } from './styles';
import Button from '../MainButton/MainButton';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Tu coche ideal te espera</HeroTitle>
      <Button onClick={() => console.log('Navegando a la página de coches')}>
        Descubre nuestros coches
      </Button>
    </HeroContainer>
  );
};

export default Hero;
