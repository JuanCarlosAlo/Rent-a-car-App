'use client'
import styled from 'styled-components';
import {MAIN_COLORS} from '../../lib/COLORS'

export const ButtonStyled = styled.button`
  background-color: ${MAIN_COLORS.TERCIARY}; 
  color: ${MAIN_COLORS.SECONDARY};
  border: none;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 1.2rem;
  z-index: 2;
  margin-top: 1rem;

  &:hover {
    background-color: ${MAIN_COLORS.HOVER}; 

  }
`;
