import React from 'react';
import styles from './Hero.module.scss';
import Button from '../MainButton/MainButton';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          No compres coche. <br />
          Hazte un REVEL.
        </h1>
        <p className={styles.heroDescripcion}>
          Suscríbete a un coche con todo incluido.<br />
          Di adiós a las largas permanencias.<br />
          Entrega a domicilio.<br />
          Prueba 15 días sin compromiso.<br />
          Conducción neutra de CO₂.
        </p>
        <Button
          url={`/vehicles/`}
          color="primary"

        >
          Descubre nuestros coches
        </Button>
      </div>
    </section>
  );
};

export default Hero;
