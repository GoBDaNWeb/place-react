import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { useInView } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import main1 from "shared/assets/images/main/main-1.jpg";
import main2 from "shared/assets/images/main/main-2.jpg";

import s from "./styles.module.sass";
import { HeroLogo } from "../HeroLogo";
import { HeroText } from "../HeroText";
import { Button, ArrowDownIcon } from "shared/ui";
import { useCarouselStore } from "entities/Carousel";

export const Hero = observer(() => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(true);
  const [delay, setDelay] = useState(100);
  const [isLoad, setIsLoad] = useState(false);

  const swiper = useSwiper();
  const slide = useSwiperSlide();

  const carousel = useCarouselStore();

  const ref = useRef(null);
  const isInView = useInView(ref);

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
    // setTimeout(() => {
    setDelay(0);
    // }, 2000);
  }, []);

  useEffect(() => {
    if (isLoad && swiper) {
      carousel.setSwiper(swiper);
      swiper.mousewheel?.disable();
      setTimeout(() => {
        swiper.mousewheel?.enable();
      }, 100);
    }
  }, [carousel, isLoad, swiper]);

  useEffect(() => {
    if (swiper) {
      carousel.setActiveIndex(swiper.activeIndex);
    }
  }, [carousel, swiper, swiper?.activeIndex]);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  const isViewClass = isInView ? s.isInView : "";
  const isActiveClass = slide?.isActive ? s.active : "";

  const leftImageWrapperClass = `${s.imgWrapper} ${
    hoveredLeft ? s.active : ""
  } ${isViewClass}`;
  const rightImageWrapperClass = `${s.imgWrapper} ${
    hoveredRight ? s.active : ""
  } ${isViewClass}`;

  const leftPartClass = `${s.leftPart} ${delay === 100 ? s.disabled : ""}`;
  const rightPartClass = `${s.rightPart} ${delay === 100 ? s.disabled : ""}`;

  return (
    <section ref={ref} className={`${s.section} ${isActiveClass}`}>
      <HeroLogo />
      {/* <div style={{ background: bgColor }} className={s.backDrop} /> */}
      <div
        onMouseEnter={() => handleHover("left")}
        onClick={() => handleHover("left")}
        className={leftPartClass}
      >
        <img
          src={main1}
          style={{ transitionDelay: `${delay}ms` }}
          className={leftImageWrapperClass}
          alt="main"
          // loading="lazy"
        />
        {/* <LazyLoadImage
          src={main1}
          style={{ transitionDelay: `${delay}ms` }}
          className={leftImageWrapperClass}
          alt="main"
          loading="lazy"
          effect="blur"
          placeholderSrc={main1}
        /> */}
        {/* <div
          style={{ transitionDelay: `${delay}ms` }}
          className={leftImageWrapperClass}
        /> */}
        <HeroText />
      </div>
      <div
        onMouseEnter={() => handleHover("right")}
        onClick={() => handleHover("right")}
        className={rightPartClass}
      >
        <img
          src={main2}
          style={{ transitionDelay: `${delay}ms` }}
          className={rightImageWrapperClass}
          alt="main"
          // loading="lazy"
        />
        {/* <LazyLoadImage
          src={main2}
          style={{ transitionDelay: `${delay}ms` }}
          className={rightImageWrapperClass}
          alt="main"
          loading="lazy"
          effect="blur"
          placeholderSrc={main2}
        /> */}
        {/* <div
          style={{ transitionDelay: `${delay}ms` }}
          className={rightImageWrapperClass}
        /> */}
      </div>
      <div className={s.btnWrapper}>
        <Button type="rounded" variable="primary" onClick={handleNextSection}>
          <ArrowDownIcon />
        </Button>
      </div>
    </section>
  );
});
