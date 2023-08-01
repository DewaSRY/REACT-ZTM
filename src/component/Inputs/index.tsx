import style from "./Input.module.scss";
import { InputHTMLAttributes } from "react";
type IInput = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Inputs({ label, ...otherProps }: IInput) {
  const inputShirk = otherProps.value ? style["form-input-label"] : "";
  return (
    <div role="input" className={style.group}>
      <input className={style["form-input"]} {...otherProps} />
      <label className={inputShirk}>{label}</label>
    </div>
  );
}