import React from 'react';
import styles from './SocialList.module.css';

function SocialList({ links }) {
  return (
    <ul className={styles.socialList}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;


