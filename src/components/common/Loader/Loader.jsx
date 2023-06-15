import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// Import styles
import styles from './Loader.module.scss';

// 1. Create our graphical Loader, to replace our text loading
// SEE MORE: https://react-bootstrap.github.io/components/spinners/
const Loader = () => {
  return (
    <Spinner className={styles.custom} animation="border" variant="info" />
  );
};

export default Loader;
