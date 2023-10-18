import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Pagination, Autoplay } from "swiper/modules";

import { useSwiperRef } from "shared/lib";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";

import { useModalStore } from "entities/Modal";
import { ArrowLeftIcon, ArrowRightIcon, Button, CloseIcon } from "shared/ui";

import { foodList } from "../config";

export const FoodModal = observer(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
  const [pagination, paginationRef] = useSwiperRef();

  const modal = useModalStore();

  const isOpen = modal.foodModalOpen ? s.open : "";
  const modalClass = `${s.modalWrapper} ${isOpen}`;

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
              {foodList.map((food) => (
                <SwiperSlide key={food.id} className={s.swiperItem}>
                  <span className={s.title}>{food.title}</span>
                  <div className={s.textWrapper}>
                    {food.text ? (
                      <p className={s.description}>{food.text}</p>
                    ) : null}
                    {food.textEng ? (
                      <p className={s.description}>{food.textEng}</p>
                    ) : null}
                  </div>
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
            modules={[Navigation, Controller, Pagination, Autoplay]}
            className={`${s.swiper} fade-swiper`}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            allowTouchMove={false}
            grabCursor={false}
            speed={600}
            controller={{ control: textSwiper }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              //@ts-ignore
              el: pagination,
              type: "bullets",
              bulletClass: "pagination-bullet",
              bulletActiveClass: "pagination-bullet-active",
              clickable: true,
            }}
          >
            {foodList.map((food, index) => (
              <SwiperSlide key={food.id}>
                <img src={food.img} alt="food" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className={`pagination pagination-secondary  ${s.pagination}`}
          ></div>
        </div>
      </div>
    </div>
  );
});
