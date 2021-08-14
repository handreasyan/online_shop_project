import React from 'react';
import ColumnComponent from "./ColumnComponent";
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.footer_columns}>
          <ColumnComponent title="Men Brands"/>
          <ColumnComponent title="Woman Brands"/>
          <ColumnComponent title="Contact Us"/>
          <ColumnComponent title="Some Title"/>
        </div>
      </div>

      <div className={styles.copyright_sec}>
        © 2021 | Author :
        <a rel="noreferrer" href="https://www.linkedin.com/in/handreasyan/" target='_blank'>
          Hakob Andreasyan
        </a>
      </div>
    </div>
  );
};

export default Footer;