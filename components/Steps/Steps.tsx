// components/Steps/Steps.tsx
import React from 'react';
import { StepContainer, StepCard, StepContent, StepTitle, StepDescription, StepImage } from './styles';
import { stepsData } from '../../lib/sections/stepsData';
import MainButton from '../MainButton/MainButton';
import { MAIN_COLORS } from '@/lib/COLORS';

const Steps = () => {
  return (
    <StepContainer>
      {stepsData.map((step, index) => (
        <StepCard key={index} zigzag={index % 2 !== 0}>
          <StepContent>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
            <MainButton onClick={()=> console.log('test')} color={MAIN_COLORS.TERCIARY}>Descubre suestros coches</MainButton>
          </StepContent>
          <StepImage src={step.image} alt={step.title} />
        </StepCard>
      ))}
    </StepContainer>
  );
};

export default Steps;