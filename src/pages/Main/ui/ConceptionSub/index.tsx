import { useSwiperSlide } from "swiper/react";

import s from "./styles.module.sass";

import { ConceptionSubText } from "../ConceptionSubText";
import { observer } from "mobx-react-lite";
import { useCarouselStore } from "entities/Carousel";

export const ConceptionSub = observer(() => {
  const carousel = useCarouselStore();

  const activeClass = carousel.activeIndex >= 2 ? s.active : "";
  return (
    <section className={`${s.section} ${activeClass}`}>
      <p className={s.mainText}>
        <span className={s.wordWrapper}>
          <span className={s.word}>Коктейльный бар</span>
        </span>
        <span className={s.wordWrapper}>
          <span className={s.word}>с танцевальной музыкой</span>
        </span>
        <span className={s.wordWrapper}>
          <span className={s.word}>в центре Сочи</span>
        </span>
      </p>
      <ConceptionSubText />
    </section>
  );
});
