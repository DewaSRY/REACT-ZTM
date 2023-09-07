import style from "./Chevron.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

type IChevron = {
  chevron: "cross" | "right-arrow" | "left-arrow";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Chevron: FC<IChevron> = ({ chevron, ...otherProps }) => {
  const chevronClass = [style.iconButton, style[chevron]].join(" ");
  return <button className={chevronClass} {...otherProps}></button>;
};
