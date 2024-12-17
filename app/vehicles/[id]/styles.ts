"use client"

import styled from 'styled-components';
import { MAIN_COLORS } from '@/lib/COLORS';

export const CarDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10rem;
  justify-content: space-between;

  @media (max-width: 768px) {
      padding: 0 1rem;
    }
  
`;

export const CarImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  object-fit: cover;
`;

export const CarDetails = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-top: 20px;
`;

export const DetailSection = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 1rem;
    color: #555;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 10px;
  }
`;

export const DetailTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${MAIN_COLORS.SECONDARY};
`;

export const PriceSection = styled.div`
  margin-top: 10px;
  h2 {
    color: ${MAIN_COLORS.SECONDARY};
    font-size: 1.8rem;
    margin: 0;
  }
`;

export const TransactionButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${MAIN_COLORS.TERCIARY};
  color:  ${MAIN_COLORS.PRIMARY};
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${MAIN_COLORS.PRIMARY};
    color: ${MAIN_COLORS.SECONDARY};
  }
`;

