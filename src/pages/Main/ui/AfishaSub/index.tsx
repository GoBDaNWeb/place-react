import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Controller, Pagination } from "swiper/modules";
import s from "./styles.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import afisha2 from "../../images/afisha2.jpg";
import afisha3 from "../../images/afisha3.jpg";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, Button } from "shared/ui";
import { useSwiperRef } from "shared/lib";

export const AfishaSub = () => {
  const [swiperMain, setSwiperMain] = useState(null);
  const [swiperText, setSwiperText] = useState(null);
  const [pagination, paginationRef] = useSwiperRef();

  const slide = useSwiperSlide();

  const activeClass = slide?.isActive || slide?.isPrev ? s.active : "";

  const afishaSubClass = `${s.section} ${activeClass}`;

  return (
    <section className={afishaSubClass}>
      <div className={s.left}>
        <div className={s.top}></div>
        <div className={s.bottom}>
          <div className={s.text}>
            <span>Афиша</span>
          </div>
          <div className={s.navigation}>
            <Button
              type="rounded"
              variable="primaryInvarion"
              onClick={() => {
                //@ts-ignore
                swiperMain.slidePrev();
                //@ts-ignore
                swiperText.slidePrev();
              }}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              type="rounded"
              variable="primaryInvarion"
              onClick={() => {
                //@ts-ignore
                swiperMain.slideNext();
                //@ts-ignore
                swiperText.slideNext();
              }}
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className={s.center}>
        <div className={s.mainSwiperWrapper}>
          <div className={s.swiperWrapper}>
            <Swiper
              //@ts-ignore
              onSwiper={(swiper) => setSwiperMain(swiper)}
              speed={600}
              loop
              allowTouchMove={false}
              grabCursor={false}
              direction={"vertical"}
              modules={[Navigation, Autoplay, Controller, Pagination]}
              className={s.swiper}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              // controller={{ control: swiperText }}
              pagination={{
                //@ts-ignore
                el: pagination,
                type: "bullets",
                bulletClass: "pagination-bullet",
                bulletActiveClass: "pagination-bullet-active",
                clickable: true,
              }}
            >
              <SwiperSlide className={s.slide}>
                <img src={afisha2} alt="afisha" />
              </SwiperSlide>
              <SwiperSlide className={s.slide}>
                <img src={afisha3} alt="afisha" />
              </SwiperSlide>
            </Swiper>
            <div
              ref={paginationRef}
              className={`pagination ${s.pagination}`}
            ></div>
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.textSwiperWrapper}>
          <Swiper
            //@ts-ignore
            onSwiper={(swiper) => setSwiperText(swiper)}
            speed={600}
            loop
            direction={"vertical"}
            allowTouchMove={false}
            grabCursor={false}
            className={s.swiper}
            modules={[Autoplay, Controller]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // controller={{ control: swiperMain }}
          >
            <SwiperSlide className={s.slide}>
              <div className={s.top}>
                <span className={s.name}>Name</span>
                <span className={s.time}>start 21:00</span>
              </div>
              <div className={s.bottom}>
                <span className={s.date}>8</span>
                <span className={s.month}>октября</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <div className={s.top}>
                <span className={s.name}>Come on</span>
                <span className={s.time}>start 21:00</span>
              </div>
              <div className={s.bottom}>
                <span className={s.date}>8</span>
                <span className={s.month}>октября</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={s.text}>
          <div className={s.row}>
            <span className={s.label}>Адрес:</span>
            <span className={s.value}>г. Сочи, ул. Войковская, д.3</span>
          </div>
          <div className={s.row}>
            <span className={s.label}>To reserve:</span>
            <span className={s.value}>+7 (900) 003-90-44</span>
          </div>
        </div>
      </div>
    </section>
  );
};
