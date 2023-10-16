import { useSwiperSlide } from "swiper/react";

import s from "./styles.module.sass";

export const HeroText = () => {
  const slide = useSwiperSlide();

  const isActiveClass = slide?.isActive ? s.active : "";

  return (
    <p className={`${s.sectionOneText} ${isActiveClass}`}>
      <span className={s.wordWrapper}>
        <span className={s.word}>Место,</span>
      </span>
      <span className={s.wordWrapper}>
        <span className={s.word}>где</span>
      </span>
      <span className={s.wordWrapper}>
        <span className={s.word}>роскошь</span>
      </span>
      <span className={s.wordWrapper}>
        <span className={s.word}>и</span>
      </span>
      <span className={s.wordWrapper}>
        <span className={s.word}>удовольствие</span>
      </span>
      <span className={s.wordWrapper}>
        <span className={s.word}>соединяются</span>
      </span>
      <span className={s.wordWrapper}>
        <span className={s.word}>воедино</span>
      </span>
    </p>
  );
};
