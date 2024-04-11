import React from 'react';
import {Link} from "react-router-dom";
import HeroSectionSwiper from "./components/HeroSectionSwiper/HeroSectionSwiper";
import HeroSectionCounters from "./components/HeroSectionCounters/HeroSectionCounters";
import HeroSectionSearchForm from "./components/HeroSectionSearchForm/HeroSectionSearchForm";
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={`${styles.heroSection_block} appContainer`}>
        <div className={styles.heroSection_block_content}>
          <h1 className={styles.heroSection_block_content_title}>
            Бизнес площадка по ремонту цифровой техники Apple и других устройств
          </h1>
          {/*Вынесла в отдельный компонет форму, что бы сократить код*/}
          <HeroSectionSearchForm/>
          <h4 className={styles.heroSection_block_content_subtitle}>Оригинальные запчасти</h4>
          <h4 className={styles.heroSection_block_content_subtitle}>Разумные цены</h4>
          <h4 className={styles.heroSection_block_content_subtitle}>Выезд</h4>
          {/*Вынесла в отдельный компонет счетчики, что бы сократить код*/}
          <HeroSectionCounters />
          <Link
            to="/register"
            className={styles.heroSection_block_content_button}
          >
            Стать участником
          </Link>
        </div>
        <div className={styles.heroSection_block_swiper}>
          {/*Вынесла в отдельный компонет swiper, что бы сократить код*/}
          <HeroSectionSwiper/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;