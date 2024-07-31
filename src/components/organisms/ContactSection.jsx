import React from 'react';
import Title from '../atoms/Title';
import SocialList from '../molecules/SocialList';
import styles from './ContactSection.module.css';

function ContactSection() {
  const links = [
    { name: 'Facebook' },
    { name: 'Twitter' },
    { name: 'Instagram' },
  ];

  return (
    <section className={styles.contactSection}>
      <Title text="Redes Sociales" />
      <SocialList links={links} />
      <p className={styles.authorName}>HALO</p>
    </section>
  );
}

export default ContactSection;
