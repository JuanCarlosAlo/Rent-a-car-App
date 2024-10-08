'use client';

import React from 'react';
import { FooterContainer, FooterContent, SocialLinks, LinkItem } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <p>&copy; {new Date().getFullYear()} Rent A Car. Todos los derechos reservados.</p>
                <p>
                    Desarrollado por <LinkItem href="https://github.com/JuanCarlosAlo" target="_blank" rel="noopener noreferrer">J.C.A.M</LinkItem>
                </p>
                <SocialLinks>
                    <LinkItem href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</LinkItem>
                    <LinkItem href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</LinkItem>
                    <LinkItem href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</LinkItem>
                </SocialLinks>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
