import { useSwiperSlide } from "swiper/react";

import s from "./styles.module.sass";

import { ConceptionSubText } from "../ConceptionSubText";

export const ConceptionSub = () => {
  const slide = useSwiperSlide();

  const activeClass = slide?.isActive || slide?.isPrev ? s.active : "";

  return (
    <section className={`${s.section} ${activeClass}`}>
      <p className={s.mainText}>
        <span className={s.wordWrapper}>
          <span className={s.word}>Концептуальный</span>
        </span>
        <span className={s.wordWrapper}>
          <span className={s.word}>Cocktail Club Place</span>
        </span>
      </p>
      <ConceptionSubText />
    </section>
  );
};
