"use client";

import styled from "styled-components";
import { MAIN_COLORS } from "@/lib/COLORS";

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 400px;
  margin: 6rem 0;
  padding: 2rem;
  overflow: hidden;
  


  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 4rem 0;
  }
`;

export const BannerImage = styled.img`
  width: 50%;
  object-fit: contain;
  height: 100%; 
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); 
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const BannerTextWrap = styled.div`
  width: 50%;
  padding: 2rem; 
  
  

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 2rem; 
    font-weight: bold;
    margin-bottom: 1rem; 
  }

  p {
    margin-bottom: 1.5rem; 
  }
`;

export const BannerButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${MAIN_COLORS.PRIMARY};
  color: ${MAIN_COLORS.SECONDARY};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: transparent;
    border: 1px solid ${MAIN_COLORS.PRIMARY};
    color:${MAIN_COLORS.PRIMARY};
  }
`;
