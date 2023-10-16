import { useSwiperSlide } from "swiper/react";
import s from "./styles.module.sass";
import { splitText } from "shared/lib";
export const CoctailSubText = () => {
  const slide = useSwiperSlide();
  const activeClass = slide?.isActive || slide?.isPrev ? s.active : "";
  const text =
    "Барная карта нашего заведения предлагает широкий выбор напитков для самых изысканных вкусов. От классических коктейлей до авторских напитков, каждый найдет что-то по своему вкусу.";
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
