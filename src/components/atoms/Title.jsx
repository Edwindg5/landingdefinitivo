import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ text, className }) {
  return (
    <h1 className={`${styles.title} ${className}`}>
      {text}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
