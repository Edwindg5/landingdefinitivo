import React from 'react';
import Title from '../atoms/Title';
import Grid from '../molecules/Grid';
import styles from './Section.module.css';

function Section() {
  return (
    <section className={styles.section}>
      <Title text="Juegos de Halo" />
      <Grid />
    </section>
  );
}

export default Section;
