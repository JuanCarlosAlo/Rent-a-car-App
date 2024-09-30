"use client"
const { styled } = require("styled-components");

export const HeroContainer = styled.section`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/assets/hero.jpg');
  background-size: cover;
  color: white;
  &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(270deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)); 
        z-index: 1; 
    }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  z-index: 2;
`;


