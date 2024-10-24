'use client'
import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  width: 100%; 
  position: relative; 
  gap:2rem;
  margin: 2rem 0;
 
`;

export const SliderCard = styled.div`
  flex: 0 0 auto;
  width:550px;
  padding:2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s;
  background-color: #fff; 

  &:hover {
    transform: translateY(-5px); 
  }
`

export const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain; /* Mantiene la proporción de la imagen */
`;

export const CarDetails = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  p {
    margin: 0.25rem 0;
    color: #555; /* Color de texto más suave */
  }
`;

export const PriceTag = styled.p`
  font-weight: bold;
  color: #333; /* Color más oscuro para el precio */
`;
