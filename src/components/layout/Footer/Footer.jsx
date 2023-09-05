// Import React modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import icons
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

// Import styles
import styles from './Footer.module.scss';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <p>&copy; {getCurrentYear()} Yves Koesumo</p>
    </footer>
  );
};

export default Footer;
