'use client';
import styled from 'styled-components';
import { MAIN_COLORS } from '@/lib/COLORS';


interface StepData {
  title: string;
  description: string;
  image: string;
}


interface StepCardProps {
  image: string;
}


export const StepContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5% 1rem;
  max-width: 90rem;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;


export const StepCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;

    justify-content: space-between; 
  }
`;


export const StepCard = styled.div<StepCardProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border: 1px solid ${MAIN_COLORS.CARDS_BORDER};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%; 
  min-height: 450px;
  color: white;

  @media (min-width: 1024px) {
    width: 100%;
    min-width: 300px;
  }



  &:hover {
    box-shadow: ${MAIN_COLORS.CARDS_SHADOW};
  }
`;


export const StepContentOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;


export const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
`;


export const StepDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;
