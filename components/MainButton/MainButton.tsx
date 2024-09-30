import React from 'react';
import { ButtonStyled } from './styles'; 

const Button = ({ children, onClick }:{
    children: React.ReactNode,
    onClick: ()=> void
}) => {
  return (
    <ButtonStyled >
      {children}
    </ButtonStyled>
  );
};

export default Button;
