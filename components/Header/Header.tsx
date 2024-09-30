'use client'

import React, { useEffect, useState } from 'react';
import { HeaderContainer, Logo, MenuToggle, StyledNav } from './styles';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderContainer scrolled={isScrolled}>
            <Logo>Rent A Car</Logo>
            <MenuToggle scrolled={isScrolled} onClick={toggleMenu}>
                {isOpen ? '✖️' : '☰'}
            </MenuToggle>
            <StyledNav open={isOpen} scrolled={isScrolled}>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/vehicles">Vehículos</a></li>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/login">Iniciar sesión</a></li>
                </ul>
            </StyledNav>
        </HeaderContainer>
    );
};

export default Header;
