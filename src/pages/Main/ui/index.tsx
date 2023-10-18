import { useEffect } from "react";
import { useWindowSize } from "shared/lib";

import s from "./styles.module.sass";

import { Hero } from "./Hero";
import { Conception } from "./Conception";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "./Carousel";
import { ConceptionSub } from "./ConceptionSub";
import { Barman } from "./Barman";
import { Afisha } from "./Afisha";
import { AfishaSub } from "./AfishaSub";
import { Coctail } from "./Coctail";
import { CoctailSub } from "./CoctailSub";
import { Food } from "./Food";
import { FoodSub } from "./FoodSub";
import { Interior } from "./Interior";
import { InteriorSub } from "./InteriorSub";
import { Footer } from "./Footer";
import { ConceptSubMobile } from "./ConceptSubMobile";

export const Main = () => {
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 1024) {
      if (document.body.className.includes("noScrollDisable")) {
        return;
      }
      document.body.classList.add("noScroll");
      setTimeout(() => {
        document.body.classList.remove("noScroll");
        document.body.classList.add("noScrollDisable");
      }, 100);
    }
    if (width > 1024) {
      document.body.classList.remove("noScrollDisable");
    }
  }, [width]);

  return (
    <div className={s.main}>
      {width <= 1024 ? (
        <>
          <Hero />
          <Conception />
          <ConceptSubMobile />
          <Barman />
          <Afisha />
          <AfishaSub />
          <Coctail />
          <CoctailSub />
          <Food />
          <FoodSub />
          <Interior />
          <InteriorSub />
          <Footer />
        </>
      ) : (
        <Carousel>
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Conception />
          </SwiperSlide>
          <SwiperSlide>
            <ConceptionSub />
          </SwiperSlide>
          <SwiperSlide>
            <Barman />
          </SwiperSlide>
          <SwiperSlide>
            <Afisha />
          </SwiperSlide>
          <SwiperSlide>
            <AfishaSub />
          </SwiperSlide>
          <SwiperSlide>
            <Coctail />
          </SwiperSlide>
          <SwiperSlide>
            <CoctailSub />
          </SwiperSlide>
          <SwiperSlide>
            <Food />
          </SwiperSlide>
          <SwiperSlide>
            <FoodSub />
          </SwiperSlide>
          <SwiperSlide>
            <Interior />
          </SwiperSlide>
          <SwiperSlide>
            <InteriorSub />
          </SwiperSlide>
          <SwiperSlide>
            <Footer />
          </SwiperSlide>
        </Carousel>
      )}
    </div>
  );
};
