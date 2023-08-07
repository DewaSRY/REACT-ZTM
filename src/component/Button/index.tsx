import style from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  buttonType?: "BASE" | "google-sign-in" | "inverted";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  const ButtonClass: string = [
    style["button-container"],
    style[buttonType],
  ].join(" ");
  return (
    <button role="button" className={ButtonClass} {...otherProps}>
      {children}
    </button>
  );
};
