import { observer } from "mobx-react-lite";

import styles from "./styles.module.sass";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BurgerIcon, Button, LogoIcon } from "shared/ui";
import { useMenuStore } from "entities/Menu";
import { useCarouselStore } from "entities/Carousel";

export const Header = observer(() => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const menu = useMenuStore();
  const carousel = useCarouselStore();

  const handleOpenMenu = () => {
    menu.handleOpenMenu();
  };

  const toTop = () => {
    if (carousel.swiper) {
      //@ts-ignore
      carousel.swiper.slideTo(0);
    }
  };

  const isDark =
    !menu.menuIsOpen &&
    (carousel.activeIndex === 5 ||
      carousel.activeIndex === 7 ||
      carousel.activeIndex === 11);

  const btnColorClass = isDark ? styles.darkBtn : "";
  const isViewClass = isInView ? styles.isInView : "";
  const headerClass = `${styles.header} ${isViewClass} ${
    isDark ? styles.dark : ""
  } container`;
  return (
    <header ref={ref} className={headerClass}>
      <div onClick={toTop} className={styles.LogoWrapper}>
        <LogoIcon isDark={isDark} />
      </div>
      <Button onClick={handleOpenMenu} className={btnColorClass}>
        {menu.menuIsOpen ? "Закрыть" : "Меню"} <BurgerIcon />
      </Button>
    </header>
  );
});
