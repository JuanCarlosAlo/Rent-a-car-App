'use client'
import React from 'react';
import { GridContainer, BrandCard, BrandLogo, Title } from './styles';
import { brandsData, brandsTitle } from '../../lib/sections/brandsData';

const BrandsGrid = () => {
  const handleBrandClick = (brand: string) => {
    console.log(`Buscar coches de la marca: ${brand}`);
  };

  return (
    <section id='brands'>
    <Title>{brandsTitle}</Title>
    <GridContainer>
      {brandsData.map((brand, index) => (
        <BrandCard key={index} onClick={() => handleBrandClick(brand.name)}>
          <BrandLogo src={brand.logo} alt={brand.name} />
        </BrandCard>
      ))}
    </GridContainer>
    </section>
  );
};

export default BrandsGrid;
