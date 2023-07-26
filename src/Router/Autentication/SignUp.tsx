//
import style from "./style/FormWrapper.module.scss";

import { FormInput } from "../../component/Input";
import { Button } from "../../component/Button";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase.utils";

import { useState } from "react";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignUp() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  async function submitHandle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("your password does not match");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormField(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        alert(`"something was wrong", &{error}`);
      }
    }
  }

  return (
    <div className={style.formWrapper}>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={submitHandle}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="on"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="on"
        />
        <div className={style["buttons-container"]}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
