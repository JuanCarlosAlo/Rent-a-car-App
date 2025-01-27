import React from 'react';
import styles from './MainContent.module.scss';

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.mainContent}>{children}</main>;
};

export default MainContent;
