'use client';

import React from 'react';
import styles from './Steps.module.scss';
import { stepsData, stepsTitle } from '../../lib/sections/stepsData';
import Image from 'next/image';
import MainButton from '../MainButton/MainButton';

const Steps = () => {
  return (
    <section id="steps" className={styles.stepContainer}>
      <h2 className={styles.title}>{stepsTitle}</h2>
      <div className={styles.stepCardsWrapper}>
      {stepsData.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <MainButton url="/vehicles/" color="secondary">
                Descubre nuestros coches
              </MainButton>
            </div>
            <Image
              src={step.image}
              alt={step.title}
              className={styles.stepImage}
              width={890}
          height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
