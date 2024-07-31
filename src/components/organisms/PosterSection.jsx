import React from 'react';
import Title from '../atoms/Title';
import Gallery from '../molecules/Gallery';
import styles from './PosterSection.module.css';
import haloData from '../../data/haloData';

function PosterSection() {
  return (
    <section className={styles.posterSection}>
      <Title text="Carteles de Halo" />
      <div className={styles.scrollableContent}>
        <Gallery images={haloData.posters} />
      </div>
    </section>
  );
}

export default PosterSection;
