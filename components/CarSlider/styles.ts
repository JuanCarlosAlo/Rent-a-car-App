'use client'
import styled from 'styled-components';


export const SliderContainer = styled.div`
  width: 100%;
  margin: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const CarCard = styled.div`
  width:100%;
  max-width: 700px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const CarImage = styled.img`
  width: 90%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
`;

export const CarDetails = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 10px 0 5px;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 10px;
  }
`;

export const PriceTag = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #000;
  margin: 10px 0;

  span {
    font-size: 1rem;
    color: #888;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
