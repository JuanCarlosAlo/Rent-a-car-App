import React from 'react';
import { Button } from './styles'; 

const MainButton = ({ children, onClick,color }:{
    children: React.ReactNode,
    onClick: ()=> void,
    color: string
}) => {
  return (
    <Button color={color}>
      {children}
    </Button>
  );
};

export default MainButton;
