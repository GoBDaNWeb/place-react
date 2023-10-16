import s from "./styles.module.sass";

import { Logo } from "shared/ui";

export const HeroLogo = () => {
  return (
    <div className={`${s.heroLogo} container`}>
      <Logo />
    </div>
  );
};
