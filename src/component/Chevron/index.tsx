import style from "./Chevron.module.scss";
import { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum CHEVRON_TYPE_CLASSES {
  CROSS = "cross",
  RIGHT = "right-arrow",
  LEFT = "left-arrow",
}

export type ChevronTypes =
  | CHEVRON_TYPE_CLASSES.CROSS
  | CHEVRON_TYPE_CLASSES.LEFT
  | CHEVRON_TYPE_CLASSES.RIGHT;

type IChevron = {
  chevron: ChevronTypes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Chevron({ chevron, ...otherProps }: IChevron) {
  const chevronOption: ChevronTypes = chevron;
  const chevronClass = [style.iconButton, style[chevronOption]].join(" ");
  return <button className={chevronClass} {...otherProps}></button>;
}
