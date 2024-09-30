'use client'
import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row; 
    align-items: flex-start; 
    max-width: 90rem;
    padding: 10% 2rem;
    margin:0 auto;
    
    @media (max-width: 768px) {
        flex-direction: column; 
        padding: 10% 1rem;
        gap: 4rem;
    }
`;

export const ContentWrapper = styled.div`
    max-width: 35%; 
    margin-right: 2rem; 

    @media (max-width: 768px) {
        margin: 0 auto; 
        max-width: 100%; 
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
`;

export const CompanyDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.8rem;
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Alinear tarjetas a la izquierda */
    gap: 1.5rem; /* Espaciado entre las tarjetas */
    width: 65%; /* Limitar el ancho en pantallas grandes */

    @media (max-width: 768px) {
        width: 100%; /* Ancho completo en pantallas pequeñas */
        justify-content: center; /* Centrar tarjetas en pantallas pequeñas */
    }
`;

export const Card = styled.div`
    display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s;
  flex: 1;
  min-width: 300px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: #333;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    color: #777;
`;