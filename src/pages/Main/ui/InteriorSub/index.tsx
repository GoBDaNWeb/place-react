import { useState } from "react";
import { observer } from "mobx-react-lite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { interiorList } from "pages/Main/config";

import { useSwiperRef } from "shared/lib";

import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useCarouselStore } from "entities/Carousel";
import { ArrowLeftIcon, ArrowRightIcon, Button } from "shared/ui";

export const InteriorSub = observer(() => {
  const [swiper, setSwiper] = useState(null);
  const [pagination, paginationRef] = useSwiperRef();

  const carousel = useCarouselStore();

  const sectionClass = `${s.section} ${
    carousel.activeIndex >= 11 ? s.active : ""
  }`;

  return (
    <section id="interior" className={sectionClass}>
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.info}>
            <span className={s.value}>12</span>
            <span className={s.label}>Столов</span>
          </div>
          <div className={s.info}>
            <span className={s.value}>2</span>
            <span className={s.label}>VIP зала</span>
          </div>
          <div className={s.info}>
            <span className={s.value}>20</span>
            <span className={s.label}>Мест за баром</span>
          </div>
        </div>
        <div className={s.bottom}>
          <span className={s.title}>
            <span className={s.word}>Интерьер</span>
          </span>
          <div className={s.navigation}>
            <Button
              type="rounded"
              variable="primaryInvarion"
              onClick={() => {
                //@ts-ignore
                swiper.slidePrev();
              }}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              type="rounded"
              variable="primaryInvarion"
              onClick={() => {
                //@ts-ignore
                swiper.slideNext();
              }}
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className={s.swiperWrapper}>
        <Swiper
          //@ts-ignore
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Navigation, Autoplay, Pagination]}
          className={s.swiper}
          allowTouchMove={false}
          grabCursor={false}
          pagination={{
            //@ts-ignore
            el: pagination,
            type: "bullets",
            bulletClass: "pagination-bullet",
            bulletActiveClass: "pagination-bullet-active",
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={600}
        >
          {interiorList.map((interior) => (
            <SwiperSlide key={interior.id}>
              <img src={interior.img} alt="interior" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className="pagination"></div>
      </div>
    </section>
  );
});
