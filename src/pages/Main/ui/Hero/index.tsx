import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { useInView } from "framer-motion";

import { useChangeColor } from "shared/lib";

import s from "./styles.module.sass";

import { HeroLogo } from "../HeroLogo";
import { HeroText } from "../HeroText";
import { Button, ArrowDownIcon } from "shared/ui";
import { useCarouselStore } from "entities/Carousel";

export const Hero = observer(() => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(true);
  const [delay, setDelay] = useState(2000);

  const { bgColor } = useChangeColor();
  const swiper = useSwiper();
  const slide = useSwiperSlide();

  const carousel = useCarouselStore();

  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log("carousel", carousel.activeIndex);

  const handleHover = (part: "left" | "right") => {
    if (part === "left") {
      setHoveredLeft(true);
      setHoveredRight(false);
    } else {
      setHoveredLeft(false);
      setHoveredRight(true);
    }
  };

  const handleNextSection = () => swiper?.slideNext();

  useEffect(() => {
    setTimeout(() => {
      setDelay(0);
    }, 2000);
  }, []);

  useEffect(() => {
    if (swiper) {
      carousel.setSwiper(swiper);
      swiper.mousewheel?.disable();
      setTimeout(() => {
        swiper.mousewheel?.enable();
      }, 2400);
    }
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      carousel.setActiveIndex(swiper.activeIndex);
    }
  }, [carousel, swiper, swiper?.activeIndex]);

  const isViewClass = isInView ? s.isInView : "";
  const isActiveClass = slide?.isActive ? s.active : "";

  const leftImageWrapperClass = `${s.imgWrapper} ${
    hoveredLeft ? s.active : ""
  } ${isViewClass}`;
  const rightImageWrapperClass = `${s.imgWrapper} ${
    hoveredRight ? s.active : ""
  } ${isViewClass}`;

  const leftPartClass = `${s.leftPart} ${delay === 2000 ? s.disabled : ""}`;
  const rightPartClass = `${s.rightPart} ${delay === 2000 ? s.disabled : ""}`;

  return (
    <section ref={ref} className={`${s.section} ${isActiveClass}`}>
      <HeroLogo />
      <div style={{ background: bgColor }} className={s.backDrop} />

      <div
        onMouseEnter={() => handleHover("left")}
        onClick={() => handleHover("left")}
        className={leftPartClass}
      >
        <div
          style={{ transitionDelay: `${delay}ms` }}
          className={leftImageWrapperClass}
        />
        <HeroText />
      </div>
      <div
        onMouseEnter={() => handleHover("right")}
        onClick={() => handleHover("right")}
        className={rightPartClass}
      >
        <div
          style={{ transitionDelay: `${delay}ms` }}
          className={rightImageWrapperClass}
        />
      </div>
      <div className={s.btnWrapper}>
        <Button type="rounded" variable="primary" onClick={handleNextSection}>
          <ArrowDownIcon />
        </Button>
      </div>
    </section>
  );
});
