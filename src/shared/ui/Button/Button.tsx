import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";

interface IButtonProps {
  variable?:
    | "primary"
    | "secondary"
    | "primaryInvarion"
    | "secondaryInvarion"
    | "clear";
  type?: "normal" | "rounded";
  className?: string;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  variable = "primary",
  type = "normal",
  onClick,
  className,
  children,
}) => {
  const btnClass = `${s.button} ${s[variable]} ${s[type]} ${
    className ? className : ""
  }`;

  return (
    <button className={btnClass} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
