import { FC, PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import { Mousewheel, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import s from "./styles.module.sass";

export const Carousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      //@ts-ignore
      effect={"creative"}
      className={s.carousel}
      mousewheel={true}
      modules={[Mousewheel, EffectCreative]}
      direction="vertical"
      allowTouchMove={false}
      grabCursor={false}
      speed={600}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: [0, "0%", -1],
        },
        next: {
          shadow: false,
          translate: [0, "100%", 0],
        },
      }}
    >
      {children}
    </Swiper>
  );
};
