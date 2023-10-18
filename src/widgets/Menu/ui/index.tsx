import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import { useMenuStore } from "entities/Menu";
import { menuList } from "../config";

import s from "./styles.module.sass";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/effect-creative";

import { Button, TelegramIcon, VkIcon, WhatsAppIcon } from "shared/ui";

import { useCarouselStore } from "entities/Carousel";

export const Menu = observer(() => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const menu = useMenuStore();
  const carousel = useCarouselStore();
  const isOpen = menu.menuIsOpen ? s.open : "";
  const menuClass = `${s.menu} ${isOpen}`;

  const handleSelectMenu = (index, section) => {
    if (carousel.swiper) {
      //@ts-ignore
      carousel.swiper?.slideTo(index);
    } else {
      const sectionRef = document.querySelector(section);
      window.scrollTo({
        top: sectionRef.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
    menu.handleOpenMenu();
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
              onClick={() => handleSelectMenu(menu.slideTo, menu.scroll)}
              onMouseEnter={() => setActiveIndex(index)}
              key={index}
            >
              {menu.title}
            </span>
          ))}
        </div>

        <div className={s.btns}>
          <Button
            link="https://api.whatsapp.com/send/?phone=79000039044&text&type=phone_number&app_absent=0"
            variable="secondaryInvarion"
            className={s.btn}
          >
            Бронировать
          </Button>
          <Button
            link="tel:+7 (900) 003-90-44"
            variable="secondaryInvarion"
            className={s.btn}
          >
            +7 (900) 003-90-44
          </Button>
          <div className={s.socialBtns}>
            <Button
              link="https://vk.com/place.sochi"
              type="rounded"
              variable="secondaryInvarion"
            >
              <VkIcon />
            </Button>
            <Button
              link="https://t.me/+79000039044"
              type="rounded"
              variable="secondaryInvarion"
            >
              <TelegramIcon />
            </Button>
            <Button
              link="https://api.whatsapp.com/send/?phone=79000039044&text&type=phone_number&app_absent=0"
              type="rounded"
              variable="secondaryInvarion"
            >
              <WhatsAppIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
