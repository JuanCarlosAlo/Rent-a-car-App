'use client';

import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} Rent A Car. Todos los derechos reservados.</p>
                <p>
                    Desarrollado por{' '}
                    <a 
                        href="https://github.com/JuanCarlosAlo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.linkItem}
                    >
                        J.C.A.M
                    </a>
                </p>
                <div className={styles.socialLinks}>
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.linkItem}
                    >
                        Facebook
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.linkItem}
                    >
                        Twitter
                    </a>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.linkItem}
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
