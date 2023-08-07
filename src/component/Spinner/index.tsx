import style from "./Spinner.module.scss";
import { FC } from "react";
export const Spinner: FC = () => {
  return (
    <div className={style.spinnerOverlay}>
      <div className={style.spinnerContainer}> </div>
    </div>
  );
};
