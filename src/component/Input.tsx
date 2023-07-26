import style from "./style/Input.module.scss";
import { InputHTMLAttributes } from "react";
type IInput = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ label, ...otherProps }: IInput) {
  const inputShirk = otherProps.value ? style.shrink : "";
  return (
    <div className={style.group}>
      <input className={style["form-input"]} {...otherProps} />
      <label className={inputShirk}>{label}</label>
    </div>
  );
}
