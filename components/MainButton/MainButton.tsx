'use client'; 

import React from 'react';
import { Button } from './styles'; 
import { useRouter } from "next/navigation";

const MainButton = ({ children, onClick, color, bgColor, url }:{
    children: React.ReactNode,
    onClick?: () => void,
    color: string,
    bgColor: string,
    url?: string,
}) => {
  const router = useRouter();


  const handleClick = () => {
    if (url) {
      router.push(url); 
    } else if (onClick) {
      onClick(); 
    }
  };

  return (
    <Button $color={color} $bgColor={bgColor} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default MainButton;
