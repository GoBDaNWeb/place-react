import { useMenuStore } from "entities/Menu";
import s from "./styles.module.sass";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button, InstagramIcon, TelegramIcon, WhatsAppIcon } from "shared/ui";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { menuList } from "../config";
import { useEffect, useState } from "react";
import { useCarouselStore } from "entities/Carousel";

export const Menu = observer(() => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const menu = useMenuStore();
  const carousel = useCarouselStore();
  const isOpen = menu.menuIsOpen ? s.open : "";
  const menuClass = `${s.menu} ${isOpen}`;

  const handleSelectMenu = (index) => {
    menu.handleOpenMenu();
    //@ts-ignore
    carousel.swiper?.slideTo(index);
  };

  useEffect(() => {
    if (swiper) {
      //@ts-ignore
      swiper.slideTo(activeIndex);
    }
  }, [activeIndex, swiper]);

  return (
    <div className={menuClass}>
      <div className={s.leftPart}>
        <Swiper
          //@ts-ignore
          onSwiper={(swiper) => setSwiper(swiper)}
          grabCursor={true}
          effect={"creative"}
          speed={600}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, "0%", -1],
            },
            next: {
              shadow: false,
              translate: [0, "-100%", 1],
            },
          }}
          modules={[EffectCreative]}
          className={s.swiper}
        >
          {menuList.map((menu, index) => (
            <SwiperSlide key={index} className={s.swiperItem}>
              <img src={menu.img} alt="menu" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.rightPart}>
        <div className={s.menuList}>
          {menuList.map((menu, index) => (
            <span
              onClick={() => handleSelectMenu(menu.slideTo)}
              onMouseEnter={() => setActiveIndex(index)}
              key={index}
            >
              {menu.title}
            </span>
          ))}
        </div>

        <div className={s.btns}>
          <Button variable="secondaryInvarion" className={s.btn}>
            Бронировать
          </Button>
          <Button variable="secondaryInvarion" className={s.btn}>
            +7 (900) 003-90-44
          </Button>
          <div className={s.socialBtns}>
            <Button type="rounded" variable="secondaryInvarion">
              <InstagramIcon />
            </Button>
            <Button type="rounded" variable="secondaryInvarion">
              <TelegramIcon />
            </Button>
            <Button type="rounded" variable="secondaryInvarion">
              <WhatsAppIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
