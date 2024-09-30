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

export const StepCard = styled.div<{ zigzag: boolean }>`
  background-color: ${MAIN_COLORS.CARDS_BG};
  border: 1px solid ${MAIN_COLORS.CARDS_BORDER};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: ${({ zigzag }) => (zigzag ? 'row-reverse' : 'row')}; 
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  &:hover{
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Estilo en escritorio (zig-zag) */
  @media (min-width: 768px) {
    align-self: ${({ zigzag }) => (zigzag ? 'flex-end' : 'flex-start')};
    width: 80%;
    height: 500px;
  }

  /* En móvil, todas las cards estarán centradas */
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
