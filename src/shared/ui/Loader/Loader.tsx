import { useChangeColor } from "shared/lib";
import { Logo } from "../Logo";
import s from "./styles.module.sass";

export const Loader = () => {
  const { bgColor } = useChangeColor();
  return (
    <div id="loader" className={s.loader}>
      <div className={s.logoWrapper}>
        <Logo />
      </div>
      <div style={{ background: bgColor }} className={s.backDrop} />
    </div>
  );
};
