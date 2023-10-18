import { useRef } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

import s from "./styles.module.sass";

import bg from "../../images/concept-bg.jpg";
import { ArrowDownIcon, Button } from "shared/ui";
import { useScroll } from "shared/lib";

export const Conception = () => {
  const ref = useRef(null);
  const slide = useSwiperSlide();
  const [titleRef] = useScroll();

  const swiper = useSwiper();

  const handleNextSection = () => swiper?.slideNext();

  const activeClass = slide?.isActive ? s.active : "";
  const secondaryScreenClass = swiper?.activeIndex >= 2 ? s.small : "";

  return (
    <section className={`${s.section} ${secondaryScreenClass} ${activeClass}`}>
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
        <span ref={titleRef} className={s.word}>
          концепция
        </span>
      </span>
      <div className={s.btnWrapper}>
        <Button type="rounded" variable="primary" onClick={handleNextSection}>
          <ArrowDownIcon />
        </Button>
      </div>
    </section>
  );
};
