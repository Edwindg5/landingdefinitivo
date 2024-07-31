import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import styles from './ExploreSection.module.css';
import haloData from '../../data/haloData';

function ExploreSection() {
  return (
    <section className={styles.exploreSection}>
      <Title text="Historia del Juego" />
      <div className={styles.imageGallery}>
        <Image src={haloData.explore[0].src} alt={haloData.explore[0].alt} className={styles.sideImage} />
        <div className={styles.paragraphs}>
          <Text text="Halo es una franquicia de videojuegos de ciencia ficción militar creada por Bungie y actualmente desarrollada por 343 Industries. La serie se centra en una guerra interestelar entre la humanidad y una alianza de alienígenas conocida como el Covenant." />
          <Text text="Con gráficos impresionantes y una narrativa profunda, Halo se ha convertido en una de las franquicias más exitosas y queridas en la historia de los videojuegos." />
        </div>
        <Image src={haloData.explore[1].src} alt={haloData.explore[1].alt} className={styles.sideImage} />
      </div>
    </section>
  );
}

export default ExploreSection;
