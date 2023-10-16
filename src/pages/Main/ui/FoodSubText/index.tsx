import { useSwiperSlide } from "swiper/react";
import s from "./styles.module.sass";
import { splitText } from "shared/lib";
export const FoodSubText = () => {
  const slide = useSwiperSlide();
  const activeClass = slide?.isActive || slide?.isPrev ? s.active : "";
  const text =
    "Наше заведение предлагает широкий ассортимент блюд, чтобы удовлетворить любой вкус и предпочтение. От классических рецептов до авторских творений, наша кухня охватывает различные кулинарные традиции и культуры.";
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
