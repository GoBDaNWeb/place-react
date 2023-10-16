import { useSwiperSlide } from "swiper/react";

import s from "./styles.module.sass";
import { splitText } from "shared/lib";

export const ConceptionSubText = () => {
  const slide = useSwiperSlide();

  const activeClass = slide?.isActive || slide?.isPrev ? s.active : "";
  const text =
    "Место притяжения для самой изысканной публики, место стиля, место модной музыки от топовых диджеев.";
  return (
    <p className={`${activeClass} ${s.sectionThreeText}`}>
      {splitText(text).map((word, index) => (
        <span className={s.wordWrapper} key={index}>
          <span className={s.word}>{word}</span>
        </span>
      ))}
    </p>
  );
};
