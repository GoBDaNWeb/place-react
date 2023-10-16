import { makeAutoObservable } from "mobx";

class ModalStore {
  coctailModalOpen = false;
  foodModalOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenCoctailModal() {
    this.coctailModalOpen = !this.coctailModalOpen;
  }
  handleOpenFoodModal() {
    this.foodModalOpen = !this.foodModalOpen;
  }
}

export default ModalStore;
