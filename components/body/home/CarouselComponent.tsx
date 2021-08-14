import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from '../../../styles/Carousel.module.css'


const CarouselComponent = () => {

  const images = [
    'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png',
    'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png',
    'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png',
    'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png',
  ]

  return (
    <div className={styles.carouselSection}>
      <div className='container'>
        <Carousel autoPlay infiniteLoop={true}
                  showArrows={true} showThumbs={false} showStatus={false}
                  dynamicHeight={true} stopOnHover={false} showIndicators={false} >
          {
            images.map((image,i)=> {
              return (
                <div className={styles.carouselItem} key={i}>
                  <div className={styles.image_content}>
                    <span className={styles.image} style={{backgroundImage:`url(${image})`}}/>
                  </div>
                  <div className={styles.textContent}>
                    <h3> Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at aut corporis cupiditate dignissimos doloremque, eligendi et id impedit ipsam modi nihil numquam odio officiis perspiciatis ratione tempore vero voluptate!</p>
                    <button>Show Now</button>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
