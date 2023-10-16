import { observer } from "mobx-react-lite";
import s from "./styles.module.sass";
import { useModalStore } from "entities/Modal";
import { ArrowLeftIcon, ArrowRightIcon, Button, CloseIcon } from "shared/ui";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import coctail from "shared/assets/coctail1.jpg";
import { coctailList } from "../config";
export const CoctailModal = observer(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
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
            modules={[Navigation, Controller]}
            className={`${s.swiper} fade-swiper`}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            allowTouchMove={false}
            grabCursor={false}
            speed={600}
            controller={{ control: textSwiper }}
          >
            {coctailList.map((coctail, index) => (
              <SwiperSlide key={index}>
                <img src={coctail.img} alt="coctail" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
});
