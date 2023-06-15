import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import styles from './ButtonLink.module.scss';

const ButtonLink = ({ children, url, className }) => {
  return (
    <Link
      to={url}
      className={`${styles.buttonLink} ${className}`}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
