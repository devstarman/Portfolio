import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles['footer']}>
        <small>
          &copy; <time dateTime="2020">2020</time> Filip Ogonowski
        </small>
    </footer>
);

export default Footer;