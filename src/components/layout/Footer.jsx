// Import React modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import icons
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';

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
      <div className={styles.socialMedia}>
        <Link
          target="_blank"
          to="https://github.com/stanlee17"
          className={styles.link}
        >
          <IoLogoGithub size={20} />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/yves-koesumo-587361169/"
          className={styles.link}
        >
          <IoLogoLinkedin size={20} />
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/stanleekoe/"
          className={styles.link}
        >
          <IoLogoInstagram size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
