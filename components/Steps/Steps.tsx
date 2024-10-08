import React from 'react';
import { StepContainer, StepCard, StepTitle, StepCardsWrapper, StepContentOverlay, StepDescription, ButtonWrapper, Title } from './styles';
import { stepsData, stepsTitle } from '../../lib/sections/stepsData';
import MainButton from '../MainButton/MainButton';
import { MAIN_COLORS } from '@/lib/COLORS';

const Steps = () => {
  return (
    <StepContainer id="steps">
      <Title>{stepsTitle}</Title>
      <StepCardsWrapper>
        {stepsData.map((step, index) => (
          <StepCard key={index} image={step.image}> {/* Pasamos la URL de la imagen como prop */}
            <StepContentOverlay>
              <StepTitle>{step.title}</StepTitle> {/* Título sobre la imagen de fondo */}
              <StepDescription>{step.description}</StepDescription> {/* Descripción sobre la imagen de fondo */}
              <MainButton onClick={() => console.log('test')} color={MAIN_COLORS.TERCIARY}>
                Descubre nuestros coches
              </MainButton>
            </StepContentOverlay>
          </StepCard>
        ))}
      </StepCardsWrapper>
    </StepContainer>
  );
};

export default Steps;