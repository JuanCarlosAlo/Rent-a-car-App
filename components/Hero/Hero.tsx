import React from 'react';
import { HeroContainer, HeroContent, HeroDescripcion, HeroTitle } from './styles';
import Button from '../MainButton/MainButton';
import { MAIN_COLORS } from '@/lib/COLORS';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
      <HeroTitle>No compres coche. <br />
        Hazte un REVEL.</HeroTitle>
      <HeroDescripcion>Suscríbete a un coche con todo incluido.<br />
        Di adiós a las largas permanencias.<br />
        Entrega a domicilio.<br />
        Prueba 15 días sin compromiso.<br />
        Conducción neutra de CO₂.</HeroDescripcion>
      <Button onClick={() => console.log('Navegando a la página de coches')} color={MAIN_COLORS.SECONDARY} bgColor={MAIN_COLORS.PRIMARY}>
        Descubre nuestros coches
      </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
