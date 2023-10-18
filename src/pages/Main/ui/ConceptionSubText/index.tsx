import { useSwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";
import { splitText } from "shared/lib";
import { useCarouselStore } from "entities/Carousel";

export const ConceptionSubText = observer(() => {
  const carousel = useCarouselStore();

  const activeClass = carousel.activeIndex >= 2 ? s.active : "";
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
});
