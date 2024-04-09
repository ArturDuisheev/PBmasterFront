import React from 'react';
import ListItem from "../../components/ListItem/ListItem";
import styles from './MobileMenu.module.scss'

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <ul className={styles.mobileMenu_lists}>
        <ListItem link="#footer" name="Услуги" className={styles.mobileMenu_lists_item}/>
        <ListItem link="#" name="Город" className={styles.mobileMenu_lists_item}/>
        <ListItem link="#" name="Статьи"/>
        <ListItem link="#" name="Отзывы"/>
        <ListItem link="#" name="Контакты"/>
      </ul>
    </div>
  );
};

export default MobileMenu;