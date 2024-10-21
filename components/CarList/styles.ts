'use client'

import { MAIN_COLORS } from '@/lib/COLORS';
import styled from 'styled-components';

export const CarListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
    gap: 1rem;
  }
`;

export const CarCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 400px; 
  text-align: left;
  position: relative;
  transition: transform 0.2s;
  width: 100%;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 90%; 
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: contain; 
`;

export const CarName = styled.h3`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

export const CarInfo = styled.div`
  padding: 15px;

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

export const NameModelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start; 
  }
`;

export const PriceTag = styled.h4`
  color: ${MAIN_COLORS.FORTH}; 
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

export const CarDetails = styled.div`
  font-size: 0.9rem;
  color: #555;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem; // Ajuste de tamaño para dispositivos más pequeños
  }
`;

export const CarAttributes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column; // Cambia a columna en móviles
    align-items: flex-start; // Alinear a la izquierda
  }
`;

export const CarAttribute = styled.span`
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  color: #333;

  @media (max-width: 768px) {
    margin-bottom: 5px; // Espacio entre atributos en móviles
  }
`;

export const OfferBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;
