import { FC, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useSwiper, useSwiperSlide } from "swiper/react";

import s from "./styles.module.sass";

import { ArrowDownIcon, Button } from "shared/ui";
import { useCarouselStore } from "entities/Carousel";

interface ISectionProps {
  bg: string;
  title: string;
}

export const Section: FC<ISectionProps> = observer(({ bg, title }) => {
  const ref = useRef(null);
  const slide = useSwiperSlide();

  const swiper = useSwiper();

  const handleNextSection = () => swiper?.slideNext();

  const carousel = useCarouselStore();

  useEffect(() => {
    if (swiper) {
      carousel.setActiveIndex(swiper.activeIndex);
    }
  }, [carousel, swiper, swiper?.activeIndex]);

  const activeClass = slide?.isActive ? s.active : "";

  return (
    <section className={`${s.section} ${activeClass}`}>
      <div className={s.lineLeft} />
      <div className={s.imageWrapper}>
        <img
          ref={ref}
          src={bg}
          className={activeClass}
          alt="section-2"
          loading="lazy"
        />
      </div>
      <div className={s.lineRight} />
      <span className={s.wordWrapper}>
        <span className={s.word}>{title}</span>
      </span>
      <div className={s.btnWrapper}>
        <Button type="rounded" variable="primary" onClick={handleNextSection}>
          <ArrowDownIcon />
        </Button>
      </div>
    </section>
  );
});
