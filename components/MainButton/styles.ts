'use client'
import styled from 'styled-components';
import {MAIN_COLORS} from '../../lib/COLORS'

interface ButtonProps {
  $color?: string; 
  $bgColor?: string; 
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  background-color: ${({ $bgColor }) => $bgColor || MAIN_COLORS.PRIMARY};  
  color: ${({ $color }) => $color || MAIN_COLORS.PRIMARY}; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: ${MAIN_COLORS.HOVER};
    color: ${MAIN_COLORS.PRIMARY};
  }
`;
