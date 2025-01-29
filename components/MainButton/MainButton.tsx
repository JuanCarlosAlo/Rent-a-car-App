"use client"
import React, { useCallback } from 'react';
import styles from './MainButton.module.scss';
import { useRouter } from 'next/navigation';


const MainButton = ({
  children,
  color,
  url,
  onClick,
}: {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'terciary' | 'forth';
  url?:string;
  onClick?: () => void;
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (url) {
      router.push(url);
    } else if (onClick) {
      onClick();
    }
  }, [url, onClick, router]);

  const handleMouseEnter = () => {
    if (url) {
      router.prefetch(url);
    }
  };
  return (
    
    <button className={`${styles.button} ${color ? styles[color]: styles.primary}`} onClick={handleClick} >
      {children}
    </button>
  );
};

export default MainButton;
