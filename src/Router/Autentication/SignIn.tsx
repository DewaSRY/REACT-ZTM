//
import style from "./style/FormWrapper.module.scss";

import { FormInput } from "../../component/Input";
import { Button } from "../../component/Button";
import { BUTTON_TYPE_CLASSES } from "../../component/UI.types";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase.utils";
import { useState } from "react";
const defaultFormFields = {
  email: "",
  password: "",
};

export function SignIn() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;
  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  async function LogGoogleUser() {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }
  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormField(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          return alert("incorrect password");
        case "auth/user-not-found":
          return alert("Email not found ");
        default:
          console.log("some things was wrong", error);
      }
    }
  }
  return (
    <div className={style.formWrapper}>
      <h2>Log In Here</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={submitHandler}>
        <FormInput
          label={"Email"}
          // type="email"
          onChange={handelChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={"Password"}
          // type="password"
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
