import { observer } from "mobx-react-lite";
import s from "./styles.module.sass";
import { useModalStore } from "entities/Modal";
import { ArrowLeftIcon, ArrowRightIcon, Button, CloseIcon } from "shared/ui";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import food from "shared/assets/food1.jpg";
import { foodList } from "../config";

export const FoodModal = observer(() => {
  const [navigation, setNavigation] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const modal = useModalStore();

  const isOpen = modal.foodModalOpen ? s.open : "";
  const modalClass = `${s.modalWrapper} ${isOpen}`;
  console.log(foodList);

  useEffect(() => {
    if (imageSwiper) {
      setNavigation({
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      });
    }
  }, [imageSwiper]);

  return (
    <div className={modalClass}>
      <div className={s.bg} />
      <div className={s.contentWrapper}>
        <Button
          className={s.closeBtn}
          onClick={() => modal.handleOpenFoodModal()}
          type="rounded"
          variable="primary"
        >
          <CloseIcon />
        </Button>
        <div className={s.content}>
          <div className={s.top}>
            <Swiper
              //@ts-ignore
              onSwiper={(swiper) => setTextSwiper(swiper)}
              modules={[Navigation, Controller]}
              className={`${s.swiper} fade-swiper`}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              allowTouchMove={false}
              grabCursor={false}
              speed={600}
              controller={{ control: imageSwiper }}
            >
              {foodList.map((food, index) => (
                <SwiperSlide key={food.id} className={s.swiperItem}>
                  <span className={s.title}>{food.title}</span>
                  <p className={s.description}>{food.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.bottom}>
            <div className={s.navigation}>
              <Button
                onClick={() => {
                  //@ts-ignore
                  imageSwiper.slidePrev();
                }}
                type="rounded"
                variable="primary"
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                onClick={() => {
                  //@ts-ignore
                  imageSwiper.slideNext();
                }}
                type="rounded"
                variable="primary"
              >
                <ArrowRightIcon />
              </Button>
            </div>
            <span className={s.count}>{imageSwiper ? activeIndex + 1 : 1}</span>
          </div>
        </div>
        <div className={s.swiperWrapper}>
          <Swiper
            //@ts-ignore
            onSwiper={(swiper) => setImageSwiper(swiper)}
            modules={[Navigation, Controller]}
            className={`${s.swiper} fade-swiper`}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            allowTouchMove={false}
            grabCursor={false}
            speed={600}
            controller={{ control: textSwiper }}
          >
            {foodList.map((food, index) => (
              <SwiperSlide key={food.id}>
                <img src={food.img} alt="food" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
});
