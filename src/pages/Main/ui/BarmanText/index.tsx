import { useSwiper } from "swiper/react";

import s from "./styles.module.sass";
import { splitText } from "shared/lib";

export const BarmanText = () => {
  const swiper = useSwiper();

  const isActiveClass = swiper?.activeIndex >= 3 ? s.active : "";
  const text =
    "КАК ШЕФ-БАРМЕН, Я СТАРАЮСЬ СОЗДАВАТЬ НЕ ТОЛЬКО ИНТЕРЕСНЫЕ КОКТЕЙЛИ, НО И ЯРКУЮ АТМОСФЕРУ, ГДЕ КАЖДЫЙ НАПИТОК СТАНОВИТСЯ ПРИКЛЮЧЕНИЕМ, А КАЖДЫЙ РАЗГОВОР – ПРЕКРАСНОЙ ИСТОРИЕЙ!";
  return (
    <p className={`${isActiveClass} ${s.sectionFourText}`}>
      {splitText(text).map((word, index) => (
        <span className={s.wordWrapper} key={index}>
          <span className={s.word}>{word}</span>
        </span>
      ))}
    </p>
  );
};
