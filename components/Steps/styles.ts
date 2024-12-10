'use client';
import styled from 'styled-components';
import { MAIN_COLORS } from '@/lib/COLORS';




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
    flex-direction: column;
    gap: 3rem;
  }
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${MAIN_COLORS.CARDS_BORDER};

  overflow: hidden;
  background: white;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

export const StepContent = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const StepImage = styled.img`
  flex: 70%;
  width: 100%;
  height: auto;
  object-fit: cover;


  @media (min-width: 768px) {
    height: 500px;
    border-radius: 0;
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${MAIN_COLORS.SECONDARY};
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${MAIN_COLORS.SECONDARY};
`;

export const MainButton = styled.button`
  background: ${MAIN_COLORS.TERCIARY};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${MAIN_COLORS.HOVER};
  }
`;
