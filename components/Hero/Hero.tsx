import React from 'react';
import { HeroContainer, HeroTitle } from './styles';
import Button from '../MainButton/MainButton';
import { MAIN_COLORS } from '@/lib/COLORS';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Tu coche ideal te espera</HeroTitle>
      <Button onClick={() => console.log('Navegando a la página de coches')} color={MAIN_COLORS.TERCIARY}>
        Descubre nuestros coches
      </Button>
    </HeroContainer>
  );
};

export default Hero;
