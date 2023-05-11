// Import React modules
import React from 'react';

// Import styles
import styles from './Footer.module.scss';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      &copy; {getCurrentYear()} Yves Koesumo
    </footer>
  );
};

export default Footer;
