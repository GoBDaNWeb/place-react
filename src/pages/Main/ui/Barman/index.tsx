import { useSwiper } from "swiper/react";
import s from "./styles.module.sass";

import barman from "../../images/barman.png";

import { QuotsIcon } from "shared/ui";
import { BarmanText } from "../BarmanText";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useCarouselStore } from "entities/Carousel";

export const Barman = observer(() => {
  const carousel = useCarouselStore();

  const isActiveClass = carousel.activeIndex >= 3 ? s.active : "";

  return (
    <section className={`${s.section} ${isActiveClass}`}>
      <div className={s.barmanWrapper}>
        <div className={s.quotsWrapper}>
          <QuotsIcon />
        </div>
        <img src={barman} alt="barman" loading="lazy" />
        <BarmanText />
        <div className={s.barmanName}>
          <h4>Artem Ten</h4>
          <h6>Шеф-бармен </h6>
        </div>
      </div>
    </section>
  );
});
