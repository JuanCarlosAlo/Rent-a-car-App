'use client'
import styled from 'styled-components';
import { MAIN_COLORS } from '@/lib/COLORS';

export const FooterContainer = styled.footer`
    background-color: ${MAIN_COLORS.SECONDARY};
    color: white;
    padding: 2rem 1rem;
    text-align: center;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
    }
`;

export const SocialLinks = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem; 
`;

export const LinkItem = styled.a`
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${MAIN_COLORS.TERCIARY}; 
    }
`;
