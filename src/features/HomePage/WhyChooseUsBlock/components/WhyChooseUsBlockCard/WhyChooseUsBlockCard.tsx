import React from 'react';
import styles from './WhyChooseUsBlockCard.module.scss';

interface Props {
  img: string;
  title: string;
  text: string;
}

const WhyChooseUsBlockCard: React.FC<Props> = ({img,title, text}) => {
  return (
    <div className={styles.whyChooseUsBlockCard}>
      <div className={styles.whyChooseUsBlockCard_img}>
        <img src={img} alt=""/>
      </div>
      <div className={styles.whyChooseUsBlockCard_content}>
        <h4 className={styles.whyChooseUsBlockCard_content_title}>{title}</h4>
        <p className={styles.whyChooseUsBlockCard_content_text}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsBlockCard;
