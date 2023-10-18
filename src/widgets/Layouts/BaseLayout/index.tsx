import { FC, PropsWithChildren, useEffect, useState } from "react";

import { CoctailModal } from "widgets/CoctailModal";
import { FoodModal } from "widgets/FoodModal";
import { Header } from "widgets/Header";
import { Menu } from "widgets/Menu";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const loader = document.querySelector("#loader");

  useEffect(() => {
    if (loader) {
      let observer = new MutationObserver(() => {
        if (loader.className.includes("loaded")) {
          setLoading(false);
        }
      });
      observer.observe(loader, {
        attributes: true,
      });
    }
  }, [loader]);
  console.log("loading", loading);

  return (
    <div>
      {/* <Loader /> */}
      <Header />
      <main>{children}</main>
      <Menu />
      <CoctailModal />
      <FoodModal />
    </div>
  );
};
