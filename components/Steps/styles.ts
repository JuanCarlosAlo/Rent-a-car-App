'use client'
import { MAIN_COLORS } from '@/lib/COLORS';
import styled from 'styled-components';

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10% 1rem;
  max-width: 90rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 10% 1rem;
  }
`;
export const Title = styled.h2`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
`;

export const StepCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'zigzag',
})<{ zigzag: boolean }>`
  background-color: ${MAIN_COLORS.CARDS_BG};
  border: 1px solid ${MAIN_COLORS.CARDS_BORDER};
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: ${({ zigzag }) => (zigzag ? 'row-reverse' : 'row')}; 
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:hover {
    box-shadow: ${MAIN_COLORS.CARDS_SHADOW};
  }

  @media (min-width: 768px) {
    align-self: ${({ zigzag }) => (zigzag ? 'flex-end' : 'flex-start')};
    height: 500px;
  }

  @media (max-width: 768px) {
    align-self: center;
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom:2rem ;
  max-width: 40%;
  
  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${MAIN_COLORS.SECONDARY};
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: ${MAIN_COLORS.SECONDARY};
  margin-bottom: 2REM;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StepImage = styled.img`
  width: 60%;
  height:100%;
  object-fit: cover;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
   
  }
`;
