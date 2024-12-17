import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 500px; 
  max-width:800px;

  @media (max-width: 768px) {
    height: 300px; 
  }
`;

export const SlideWrapper = styled.div<{ $translateX: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $translateX }) => `translateX(${$translateX}%)`};
`;


export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  background-size: 90%;
  background-position: center;
  background-repeat:no-repeat;
  
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:first-of-type {
    left: 0px;
  }

  &:last-of-type {
    right: 0px;
  }
`;