import React from 'react';
import styles from './Logo.module.css';
import haloData from '../../data/haloData';

function Logo() {
  return (
    <img src={haloData.logo.src} alt={haloData.logo.alt} className={styles.logo} />
  );
}

export default Logo;
