import style from "./Spinner.module.scss";

export function Spinner() {
  return (
    <div className={style.spinnerOverlay}>
      <div className={style.spinnerContainer}> </div>
    </div>
  );
}
