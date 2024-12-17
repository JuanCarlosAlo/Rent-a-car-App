"use client"

import { MAIN_COLORS, MAIN_GRADIANTS } from "@/lib/COLORS";

const { styled } = require("styled-components");

export const HeroContainer = styled.section`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100vh;
  padding: 0 10rem;
  background-image: url('/assets/hero.jpg');
  background-size: cover;
  color: ${MAIN_COLORS.PRIMARY};
  &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${MAIN_GRADIANTS.BOTTOM_GRADIENT};
        z-index: 1; 
    }
    @media (max-width: 768px) {
      align-items: center;
      padding: 0 1rem;
    }
`;

export const HeroContent = styled.div`
display:flex;
flex-direction: column;
gap:2rem;
justify-content: flex-end;
margin-bottom: 10rem;

`

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  text-align: left;
  font-weight: 400;
  z-index: 2;
`;

export const HeroDescripcion = styled.p`
  font-size: 1.2rem;
  text-align: left;
  z-index: 2;
`;


