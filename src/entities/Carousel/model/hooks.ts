import { useContext } from "react";

import { CarouselStoreContext } from "./context";

export const useCarouselStore = () => {
  const store = useContext(CarouselStoreContext);
  if (!store) {
    throw new Error("Carouse Store has not been installed");
  }

  return store;
};
