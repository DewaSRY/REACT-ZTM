//
import style from "./style/FormWrapper.module.scss";

import { FormInput, BUTTON_TYPE_CLASSES, Button } from "../../component";

import { useState } from "react";
import { useUser } from "../../hooks";
const defaultFormFields = {
  email: "",
  password: "",
};
export function SignIn() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const { googleLogin, emailLogin } = useUser();
  const LogGoogleUser = () => googleLogin();

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormField(defaultFormFields);
    emailLogin(email, password);
  }
  return (
    <div className={style.formWrapper}>
      <h2>Log In Here</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={submitHandler}>
        <FormInput
          label={"Email"}
          type="email"
          onChange={handelChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          onChange={handelChange}
          name="password"
          value={password}
          required
        />
        <div className={style["buttons-container"]}>
          <Button type="submit">SIGN IN </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.GOOGLE}
            onClick={LogGoogleUser}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}
