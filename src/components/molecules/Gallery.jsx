import React from 'react';
import PropTypes from 'prop-types';
import Image from '../atoms/Image';
import styles from './Gallery.module.css';

function Gallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <Image key={index} src={img.src} alt={img.alt} className={styles.image} />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
