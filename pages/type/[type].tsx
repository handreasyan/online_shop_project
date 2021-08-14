import React from 'react';
import Layout from "../../components/Layout";
import styles from '../../styles/Type.module.css'
import {useRouter} from "next/router";
import {ROUTES} from "../../enums";
import Image from "next/image";
import image from '../../public/clothe.jpg'


const fakeData = [
  {
    title:'Clothe N1',
    price:540,
    src:'https://cdn.cliqueinc.com/posts/292217/worn-stories-netflix-292217-1616096578950-main.700x0c.jpg',
  },
  {
    title:'Clothe N2',
    price:89,
    src:'https://n.nordstrommedia.com/id/sr3/61713ddc-72c4-44b6-b615-8a0404c049e7.jpeg?h=365&w=240&dpr=2',
  },
  {
    title:'Clothe N3',
    price:11,
    src:'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/769702.jpg',
  },
  {
    title:'Clothe N4',
    price:36,
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tuA8CXx5K7PYF-tbRAMYAf9OXuQG-7Aev3IwQCg1gAC3_lSroyb4HFTbW1C5GgQbj4Y&usqp=CAU',
  },
  {
    title:'Clothe N4',
    price:36,
    src:'data:image/jpeg;base64,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MjscfNaXbPf8r2nnLT2/lVlD2gYfja5p4eIfnyUxm16JyqN6y36wpsylhg/Aq0Kjc2npDvpksW0nnSOZH0z8lvbtOj/7GHheH5Xj9sUW5OB4NaXH6KrvwxHT413Zto2LUy7yb/KmspAZ9hgFX0tovqGGU3ni7wjtiVaWfY1R8Go8gfpb4R11KrtXb5N09qqKr8jxj7xusEncNOZ0V1YbDdxdi7yHJbrLZGU23WNACkKxAREQBERAEREAREQBeFeogMC1a30wVvXiAr6+z2u0VVafZpj82hdKkIDinexTJkEt5Ej6KTZ/ZBo+KpUI3Go+O0rrAvUBX2HZVKl8DRO/Xup4C9RAeELS+lK3ogKyvYQ7RVdp2IDoumIXl1AcRW9mwdFH/wDFOC773YS4EBxdm9k2jMK3svs6xvyhX4C9QEahY2NyAUlEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//Z',
  },
  {
    title:'Clothe N4',
    price:36,
    src:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*',
  },
  {
    title:'Clothe N4',
    price:36,
    src:'https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg',
  },
  {
    title:'Clothe N4',
    price:36,
    src:'https://assets.ajio.com/medias/sys_master/root/20210403/xX5W/6068a008aeb269a9e335b3ef/-473Wx593H-461778987-white-MODEL.jpg',
  },
  {
    title:'Clothe N4',
    price:36,
    src:'https://pyxis.nymag.com/v1/imgs/c4e/674/1892c1d09ba24378b0d547eeaffa7fac93-EN-US-Worn-S1-Main-Vertical-27x40-RGB-PR.rvertical.w600.jpg',
  },
]

const Type = () => {

  const { query:{ type } } = useRouter();


  return (
    <Layout>
      <div className={styles.type_section} >
        {/* @ts-ignore */}
        <h2>{ROUTES[type]}</h2>
        <div className="container">
          <div className={styles.type_content}>
            {fakeData.map(item => {
              return <div className={styles.item} key={item.title}>
                <div className={styles.item_image}>
                  <img
                    alt={item.title}
                    src={item.src}
                  />
                </div>
                <div className={styles.for_buy}>
                  <span>{item.price}$</span>
                  <button>See</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Type;