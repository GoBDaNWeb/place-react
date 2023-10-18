import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { observer } from "mobx-react-lite";

import { useMenuStore } from "entities/Menu";
import { useCarouselStore } from "entities/Carousel";

import styles from "./styles.module.sass";

import { BurgerIcon, Button, LogoIcon } from "shared/ui";

export const Header = observer(() => {
  const [active, setActive] = useState(false);

  const menu = useMenuStore();
  const carousel = useCarouselStore();

  const handleOpenMenu = () => {
    menu.handleOpenMenu();
  };

  const toTop = () => {
    if (carousel.swiper) {
      //@ts-ignore
      carousel.swiper.slideTo(0);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setActive(true);
  }, []);

  const isDark =
    !menu.menuIsOpen &&
    (carousel.activeIndex === 5 ||
      carousel.activeIndex === 6 ||
      carousel.activeIndex === 7 ||
      carousel.activeIndex === 11);

  const btnColorClass = isDark ? styles.darkBtn : "";
  const isViewClass = active ? styles.isInView : "";
  const headerClass = `${styles.header} ${isViewClass} ${
    isDark ? styles.dark : ""
  } container`;

  return (
    <header className={headerClass}>
      <div onClick={toTop} className={styles.LogoWrapper}>
        <LogoIcon isDark={isDark} />
      </div>
      <Button onClick={handleOpenMenu} className={btnColorClass}>
        {menu.menuIsOpen ? "Закрыть" : "Меню"} <BurgerIcon />
      </Button>
    </header>
  );
});
