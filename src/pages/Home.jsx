import React from 'react';
import haloData from '../data/haloData';
import Logo from '../components/organisms/Logo';
import ExploreSection from '../components/organisms/ExploreSection';
import Section from '../components/organisms/Section';
import PosterSection from '../components/organisms/PosterSection';
import AdditionalInfoSection from '../components/organisms/AdditionalInfoSection';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Logo src={haloData.logo.src} alt={haloData.logo.alt} />
      <Section />
      <ExploreSection />
      <PosterSection />
      <AdditionalInfoSection info={haloData.additionalInfo} />
    </div>
  );
}

export default Home;
