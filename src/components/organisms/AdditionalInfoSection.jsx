import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import styles from './AdditionalInfoSection.module.css';
import haloData from '../../data/haloData';

function AdditionalInfoSection() {
  return (
    <section className={styles.additionalInfoSection}>
      <Title text="Información Adicional" />
      {haloData.additionalInfo.map((info, index) => (
        <div key={index} className={styles.infoItem}>
          <h2 className={styles.infoTitle}>{info.title}</h2>
          <Text text={info.text} />
        </div>
      ))}
    </section>
  );
}

export default AdditionalInfoSection;
