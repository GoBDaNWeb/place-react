import { FC } from "react";

import { MenuProvider } from "entities/Menu";
import { CarouselProvider } from "entities/Carousel";
import { ModalProvider } from "entities/Modal";

export const withStore = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function WithStoreComponent(props: T) {
    return (
      <ModalProvider>
        <CarouselProvider>
          <MenuProvider>
            <Component {...props} />
          </MenuProvider>
        </CarouselProvider>
      </ModalProvider>
    );
  };
};
