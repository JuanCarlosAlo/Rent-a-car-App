"use client";
import React, { useCallback } from "react";
import styles from "./MainButton.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MainButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "terciary" | "forth";
  url?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; 
}

const MainButton: React.FC<MainButtonProps> = ({ 
  children, 
  color = "primary", 
  url, 
  onClick, 
  disabled,
  type = "button"
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (url) {
      router.push(url);
    } else if (onClick) {
      onClick();
    }
  }, [url, onClick, router]);


  if (url) {
    return (
      <Link 
        className={`${styles.button} ${styles[color]}`} 
        href={url} 
        prefetch
        onClick={handleClick} 
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={`${styles.button} ${styles[color]}`} 
      onClick={onClick} 
      type={type} 
      disabled={!disabled ? false : true}
    >
      {children}
    </button>
  );
};

export default MainButton;
