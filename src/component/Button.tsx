import style from "./style/Button.module.scss";
import { ButtonHTMLAttributes } from "react";
import { ButtonTypes } from "./UI.types";

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
