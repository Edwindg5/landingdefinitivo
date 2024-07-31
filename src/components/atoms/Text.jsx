import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

function Text({ text }) {
  return <p className={styles.text}>{text}</p>;
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
