import { FC, PropsWithChildren } from "react";
import { CoctailModal } from "widgets/CoctailModal";
import { FoodModal } from "widgets/FoodModal";
import { Header } from "widgets/Header";
import { Menu } from "widgets/Menu";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Menu />
      <CoctailModal />
      <FoodModal />
    </div>
  );
};
