import React from 'react';
import styles from '../../styles/Header.module.css'
import Link from "next/link";
const Header = () => {
  const items = ['home','clothes','jeans','shoes','handbags','accessories','mens']

  return (
    <header className={styles.tag} >
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.logo_content}>Royal</div>
          <div className={styles.search_content}>
            <i className='fas fa-user' />
            <input type={styles.text}/>
          </div>
          <div className={styles.shop_box_content}>
            <span className={styles.logo} />
            <span className={styles.price}>$300</span>
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className='container'>
          <ul className={styles.items_list}>
            {items.map((item,i)=>{
              const src = item === 'home' ? '/' : `/type/${item}`
              return (
                <>
                  <li key={i} >
                   <Link  href={src}>
                     <a>{item === 'mens' && 'FOR  '}{item.toUpperCase()}</a>
                   </Link>
                  </li> {i !== items.length-1 && '|'}
                </>
              )
            })}
          </ul>
        </div>
      </nav>


    </header>
  );
};

export default Header;