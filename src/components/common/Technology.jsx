import React from 'react';

// Import styles
import styles from './Technology.module.scss';

const Technology = ({ image, children, alt }) => {
  return (
    <div className={styles.technology}>
      <div className={styles.wrapper}>
        <img src={image} alt={alt} className={styles.image} />
        <p className={styles.name}>{children}</p>
      </div>
    </div>
  );
};

export default Technology;
