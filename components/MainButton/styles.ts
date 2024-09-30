'use client'
import styled from 'styled-components';
import {MAIN_COLORS} from '../../lib/COLORS'

interface ButtonProps {
  color?: string;  
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  background-color: ${({ color }) => color || MAIN_COLORS.PRIMARY};  
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: ${({ color }) => color ? MAIN_COLORS.HOVER : '#333'};  // Efecto hover en función del color: ;
  }
`;
