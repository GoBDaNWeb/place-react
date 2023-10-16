import { FC, PropsWithChildren } from "react";

import { CarouselStoreContext } from "./context";
import CarouselStore from "./store";

export const CarouselProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CarouselStoreContext.Provider value={new CarouselStore()}>
      {children}
    </CarouselStoreContext.Provider>
  );
};
