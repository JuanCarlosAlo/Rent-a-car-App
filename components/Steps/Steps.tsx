import React from 'react';
import { StepContainer, StepCard, StepTitle, StepCardsWrapper,  StepDescription,  Title, StepImage, StepContent } from './styles';
import { stepsData, stepsTitle } from '../../lib/sections/stepsData';

import { MAIN_COLORS } from '@/lib/COLORS';
import MainButton from '../MainButton/MainButton';

const Steps = () => {
  return (
    <StepContainer id="steps">
      <Title>{stepsTitle}</Title>
      <StepCardsWrapper>
    {stepsData.map((step, index) => (
      <StepCard key={index}>
        <StepContent>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <MainButton
            onClick={() => console.log("test")}
            color={MAIN_COLORS.PRIMARY}
            bgColor={MAIN_COLORS.SECONDARY}
          >
            Descubre nuestros coches
          </MainButton>
        </StepContent>
        <StepImage src={step.image} alt={step.title} />
      </StepCard>
    ))}
  </StepCardsWrapper>
    </StepContainer>
  );
};

export default Steps;