import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import WhyChooseUsBlockCard from "../WhyChooseUsBlockCard/WhyChooseUsBlockCard";
import carImage from "../../../../../img/home/whyChooseUsBlock/car.svg";
import starImage from "../../../../../img/home/whyChooseUsBlock/star.svg";
import priceLabelImage from "../../../../../img/home/whyChooseUsBlock/price-label.svg";
import clockImage from "../../../../../img/home/whyChooseUsBlock/clock.svg";

const WhyChooseUsBlockSwiper = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <WhyChooseUsBlockCard
            img={starImage}
            title="Качество"
            text="
            Наши мастера имеют 10+ лет опыта работы в области переклейки
            и ремонта Iphone. Работая с нами, Вы можете быть совершенно уверены в том, что ваш
            телефон в надежных и опытных руках.
          "
          />
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <WhyChooseUsBlockCard
            img={clockImage}
            title="Сроки работы"
            text="
            Мы пунктуальны и ответственны. Называем срок работы с запасом
            и выполняем работу почти всегда раньше обещанного срока,
            а ровно в срок сдаем тогда, когда происходят непредвиденные обстоятельства.
          "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WhyChooseUsBlockSwiper;