import { makeAutoObservable } from "mobx";

class CarouselStore {
  activeIndex = 0;
  swiper = null;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
  setSwiper(swiper: any) {
    this.swiper = swiper;
  }
}

export default CarouselStore;
