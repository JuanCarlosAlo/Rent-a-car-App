'use client'
import styled from 'styled-components';
import { MAIN_COLORS } from '@/lib/COLORS';

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem; 
  padding: 2rem;
  justify-items: center;
  align-items: center;
  max-width: 40rem;
  margin: 4rem auto;

 
`;
export const Title = styled.h2`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
`;

export const BrandCard = styled.div`
  background-color: ${MAIN_COLORS.CARDS_BG};
  border: 1px solid ${MAIN_COLORS.CARDS_BORDER};
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin: 0 auto;
  max-width: 120px; 
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${MAIN_COLORS.CARDS_SHADOW};
  }

 
`;

export const BrandLogo = styled.img`
  width: 80px; 
  height: 80px;
`;
