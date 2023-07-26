import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import style from "./style/Authentication.module.scss";
export function Authentication() {
  return (
    <div className={style["authentication-container"]}>
      <SignIn />
      <SignUp />
    </div>
  );
}
