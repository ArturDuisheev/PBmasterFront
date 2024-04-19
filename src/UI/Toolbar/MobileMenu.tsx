import React, {useState} from 'react';
import ListItem from "../../components/ListItem/ListItem";
import ServiceDropDownMobile from "./components /ServiceDropDownMobile/ServiceDropDownMobile";
import styles from './MobileMenu.module.scss'

const MobileMenu = () => {
  const [openItem, setOpenItem] = useState<boolean>(false);

  return (
    <div className={styles.mobileMenu}>
      <ul className={styles.mobileMenu_lists}>
        <ListItem link="#footer" name="Услуги" className={styles.mobileMenu_lists_item} onClick={() => setOpenItem(!openItem)}/>
          {openItem && <ServiceDropDownMobile />}
        <ListItem link="#" name="Город" className={styles.mobileMenu_lists_item}/>
        <ListItem link="#" name="Статьи"/>
        <ListItem link="#" name="Отзывы"/>
        <ListItem link="#" name="Контакты"/>
        <ListItem link="/orders" name="Мои заказы"/>
      </ul>
    </div>
  );
};

export default MobileMenu;