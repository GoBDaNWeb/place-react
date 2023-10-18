import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Pagination, Autoplay } from "swiper/modules";
import { observer } from "mobx-react-lite";

import { coctailList } from "../config";
import { useSwiperRef } from "shared/lib";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";

import { useModalStore } from "entities/Modal";
import { ArrowLeftIcon, ArrowRightIcon, Button, CloseIcon } from "shared/ui";

export const CoctailModal = observer(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
  const [pagination, paginationRef] = useSwiperRef();

  const modal = useModalStore();

  const isOpen = modal.coctailModalOpen ? s.open : "";
  const modalClass = `${s.modalWrapper} ${isOpen}`;

  return (
    <div className={modalClass}>
      <div className={s.bg} />
      <div className={s.contentWrapper}>
        <Button
          type="rounded"
          variable="primaryInvarion"
          className={s.closeBtn}
          onClick={() => modal.handleOpenCoctailModal()}
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
              {coctailList.map((coctail, index) => (
                <SwiperSlide key={index} className={s.swiperItem}>
                  <span className={s.title}>{coctail.title}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.bottom}>
            <div className={s.navigation}>
              <Button
                type="rounded"
                variable="primaryInvarion"
                onClick={() => {
                  //@ts-ignore
                  imageSwiper.slidePrev();
                }}
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                type="rounded"
                variable="primaryInvarion"
                onClick={() => {
                  //@ts-ignore
                  imageSwiper.slideNext();
                }}
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
            modules={[Navigation, Controller, Autoplay, Pagination]}
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
            {coctailList.map((coctail, index) => (
              <SwiperSlide key={index}>
                <img src={coctail.img} alt="coctail" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className={`pagination ${s.pagination}`}
          ></div>
        </div>
      </div>
    </div>
  );
});
