'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Cambiamos a usePathname en lugar de useRouter
import { HeaderContainer, Logo, MenuToggle, StyledNav } from './styles';
import { NAV_ITEMS } from '../../lib/sections/navItems';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 
    const pathname = usePathname(); // Usar usePathname para obtener la ruta actual

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (pathname === '/') { 
            setIsScrolled(window.scrollY > 0);
        }
    };

    useEffect(() => {
        if (pathname === '/') { 
            window.addEventListener('scroll', handleScroll);
        }
        else{
            setIsScrolled(true)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, [pathname]); 

    const handleNavigation = (href: string) => {
        setIsOpen(false); 
    
        if (href.startsWith('#')) {
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <HeaderContainer scrolled={isScrolled}>
            <Logo>Rent A Car</Logo>
            <MenuToggle scrolled={isScrolled} onClick={toggleMenu}>
                {isOpen ? '✖️' : '☰'}
            </MenuToggle>
            <StyledNav open={isOpen} scrolled={isScrolled}>
                <ul>
                    {NAV_ITEMS.map(item => (
                        <li key={item.title}>
                            <Link href={item.href} onClick={() => handleNavigation(item.href)}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </StyledNav>
        </HeaderContainer>
    );
};

export default Header;
