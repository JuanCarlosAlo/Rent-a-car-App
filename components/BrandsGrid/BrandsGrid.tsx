"use client"
import React from 'react';
import styles from './BrandsGrid.module.scss';
import { brandsData, brandsTitle } from '../../lib/sections/brandsData';
import Image from 'next/image';

const BrandsGrid = () => {
  const handleBrandClick = (brand: string) => {
    console.log(`Buscar coches de la marca: ${brand}`);
  };

  return (
    <section id='brands'>
      <h2 className={styles.title}>{brandsTitle}</h2>
      <div className={styles.gridContainer}>
        {brandsData.map((brand, index) => (
          <div
            key={index}
            className={styles.brandCard}
            onClick={() => handleBrandClick(brand.name)}
          >
            <Image className={styles.brandLogo} src={brand.logo} alt={brand.name}  width={100}
          height={100}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsGrid;
