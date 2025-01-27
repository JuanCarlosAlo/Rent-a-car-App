'use client';

import React from 'react';
import styles from './Info.module.scss';
import { infoData, infoDesc, infoTitle } from '../../lib/sections/infoData';
import MainButton from '../MainButton/MainButton';

const Info = () => {
  return (
    <section id="info" className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{infoTitle}</h2>
        <p className={styles.companyDescription}>{infoDesc}</p>
        <MainButton
          url={`/vehicles/`}
          color="primary"

        >
          Descubre nuestros coches
        </MainButton>
      </div>
      <div className={styles.cardList}>
        {infoData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
