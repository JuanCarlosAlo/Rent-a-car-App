"use client"
import React from 'react';
import styles from './MainButton.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const MainButton = ({
  children,
  color,
  url,
  onClick,
}: {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'terciary' | 'forth';
  url:string;
  onClick?: () => void;
}) => {
  const router = useRouter();

  const handleClick = () => {
   if (onClick) {
      onClick(); 
    }
  };

  return (
    
    <Link className={`${styles.button} ${color ? styles[color]: styles.primary}`} onClick={handleClick} href={url} prefetch>
      {children}
    </Link>
  );
};

export default MainButton;
