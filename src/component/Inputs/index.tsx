import style from "./Input.module.scss";
import { InputHTMLAttributes, FC } from "react";
type IInput = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Inputs: FC<IInput> = ({ label, ...otherProps }) => {
  const inputShirk = otherProps.value ? style["form-input-label"] : "";
  return (
    <div role="input" className={style.group}>
      <input className={style["form-input"]} {...otherProps} />
      <label className={inputShirk}>{label}</label>
    </div>
  );
};
