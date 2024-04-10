import React from 'react';
import WhyChooseUsBlockCard from "./components/WhyChooseUsBlockCard/WhyChooseUsBlockCard";
import WhyChooseUsBlockSwiper from "./components/WhyChooseUsBlockSwiper/WhyChooseUsBlockSwiper";
import carImage from '../../../img/home/whyChooseUsBlock/car.svg';
import starImage from '../../../img/home/whyChooseUsBlock/star.svg';
import priceLabelImage from '../../../img/home/whyChooseUsBlock/price-label.svg';
import clockImage from '../../../img/home/whyChooseUsBlock/clock.svg';
import styles from './WhyChooseUsBlock.module.scss';

// Создала директорию features в ней HomePage для главной старницы, что бы ориентироваться
// в features  мы создаем страницы и внутри блоки которые относятся к этой странице
// в компонеты мы создаем для переиспользуемые части кода

const WhyChooseUsBlock = () => {

  // Добавила то, что было в удаленном файле Depature
  // useEffect(() => {
  //   Aos.init({
  //     duration : 1000
  //   });
  //   Aos.refresh();
  // }, []);

  return (
    <div className={`${styles.whyChooseUsBlock} appContainer`}>
      <h2 className={styles.whyChooseUsBlock_title}>Почему мы?</h2>
      <div className={styles.whyChooseUsBlock_cards}>
        {/*Вынесла в отдельный компонент что бы сократить код и переиспользовать карточки в свайпере мобильной версии*/}
        <WhyChooseUsBlockCard
          img={carImage}
          title="Выезд"
          text="
            Время - деньги. Заказав переклейку или ремонт iphone у нас
            Вы можете сэкономить 3-4 часа времени. Мастер приедет
            и произведет ремонт у вас дома или в офисе или заберет
            у вас телефон, потом доставит отремонтированный.
          "
        />

        <WhyChooseUsBlockCard
          img={starImage}
          title="Качество"
          text="
            Наши мастера имеют 10+ лет опыта работы в области переклейки
            и ремонта Iphone. Работая с нами, Вы можете быть совершенно уверены в том, что ваш
            телефон в надежных и опытных руках.
          "
        />

        <WhyChooseUsBlockCard
          img={priceLabelImage}
          title="Цены"
          text="
            Наши цены ниже среднерыночных, несмотря на то, что качество работы яна самом высшем
            уровне. Несмотря на то, что мы используем только оригинальные зап. части. Мы любим
            свою работу, работаем много и это позволяет предлагать лучшие
            на рынке условия.
          "
        />

        <WhyChooseUsBlockCard
          img={clockImage}
          title="Сроки работы"
          text="
            Мы пунктуальны и ответственны. Называем срок работы с запасом
            и выполняем работу почти всегда раньше обещанного срока,
            а ровно в срок сдаем тогда, когда происходят непредвиденные обстоятельства.
          "
        />
      </div>
      {/*Вынесла свайпер в отдельный компонет что бы сократить код*/}
      <div className={styles.whyChooseUsBlock_swiper}>
        <WhyChooseUsBlockSwiper />
      </div>
    </div>
  );
};

export default WhyChooseUsBlock;