import style from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum BUTTON_TYPE_CLASSES {
  BASE = "BASE",
  GOOGLE = "google-sign-in",
  INVERTED = "inverted",
}

type ButtonTypes =
  | BUTTON_TYPE_CLASSES.BASE
  | BUTTON_TYPE_CLASSES.GOOGLE
  | BUTTON_TYPE_CLASSES.INVERTED;

type ButtonProps = {
  children: React.ReactNode;
  buttonType?: ButtonTypes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, buttonType, ...otherProps }: ButtonProps) {
  const optionButton: ButtonTypes = buttonType;
  const ButtonClass: string = [
    style["button-container"],
    style[optionButton],
  ].join(" ");
  return (
    <button className={ButtonClass} {...otherProps}>
      {children}
    </button>
  );
}
