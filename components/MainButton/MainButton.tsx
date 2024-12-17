import React from 'react';
import { Button } from './styles'; 

const MainButton = ({ children, onClick,color,bgColor }:{
    children: React.ReactNode,
    onClick: ()=> void,
    color: string,
    bgColor:string,
}) => {
  return (
    <Button $color={color} $bgColor={bgColor}>
      {children}
    </Button>
  );
};

export default MainButton;
