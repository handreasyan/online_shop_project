import React from 'react';
import Link from "next/link";
import styles from '../../styles/Footer.module.css'

interface IProps {
  title:string
}

const ColumnComponent:React.FC<IProps> = ({title}) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.column_title}>{title}</h3>
      <Link href=''><a>Item 1 </a></Link>
      <Link href=''><a>Item 2 </a></Link>
      <Link href=''><a>Item 3 </a></Link>
      <Link href=''><a>Item 4 </a></Link>
      <Link href=''><a>Item 5 </a></Link>
      <Link href=''><a>Item 6 </a></Link>
    </div>
  );
};

export default ColumnComponent;