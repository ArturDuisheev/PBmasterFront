import React from 'react';
import styles from './Loader.module.scss';
const Loader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader_loader}></div>
    </div>
  );
};

export default Loader;