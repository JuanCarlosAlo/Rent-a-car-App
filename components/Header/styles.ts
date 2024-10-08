import styled from 'styled-components';
import { MAIN_COLORS } from '../../lib/COLORS';

// Definimos las interfaces para las props
interface HeaderContainerProps {
  scrolled: boolean;
}

interface ToggleProps {
  scrolled: boolean;
}

interface NavProps {
  open: boolean;
  scrolled: boolean;
}

// Filtramos la prop scrolled antes de que llegue al DOM
export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled',
})<HeaderContainerProps>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ scrolled }) => (scrolled ? MAIN_COLORS.PRIMARY : 'transparent')};
  color: ${({ scrolled }) => (scrolled ? MAIN_COLORS.SECONDARY : 'white')};
  transition: background 0.3s ease;
  width: 100%;
  z-index: 10;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: 150px;
`;

export const StyledNav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled' && prop !== 'open',
})<NavProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  max-height: ${({ open }) => (open ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  z-index: 1;
  background-color: ${({ scrolled }) => (scrolled ? MAIN_COLORS.PRIMARY : 'transparent')};
  width: 100vw;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 1rem 2rem;

      a {
        color: ${({ scrolled }) => (scrolled ? MAIN_COLORS.SECONDARY : MAIN_COLORS.PRIMARY)};
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: ${MAIN_COLORS.TERCIARY};
        }
      }
    }
  }

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    max-height: none;
    width: auto;
    background-color: transparent;

    ul {
      flex-direction: row;
    }
  }
`;


export const MenuToggle = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled',
})<ToggleProps>`
  background: none;
  border: none;
  color: ${({ scrolled }) => (scrolled ? MAIN_COLORS.SECONDARY : MAIN_COLORS.PRIMARY)};
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  margin-left: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
