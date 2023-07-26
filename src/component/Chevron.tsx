import style from "./style/Cheveron.module.scss";
import { ButtonHTMLAttributes } from "react";

import { ChevronTypes } from "./UI.types";

type IChevron = {
  chevron: ChevronTypes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Chevron({ chevron, ...otherProps }: IChevron) {
  const cheveronOption: ChevronTypes = chevron;
  const cheveronClass = [style.iconButton, style[cheveronOption]].join(" ");
  return <button className={cheveronClass} {...otherProps}></button>;
}
