import { createContext } from "react";

import carouselStore from "./store";

export const CarouselStoreContext = createContext<null | carouselStore>(null);
