import style from "./Authentication.module.scss";
import { Button, Forms } from "../../component";
import { useUser } from "../../hooks";
import { FC } from "react";
const signForm = {
  email: "",
  password: "",
};
const signUpForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignInForm: FC = () => {
  const { signInWithGoogle, signInStartWitheEmail } = useUser();
  let email: string;
  let password: string;
  const handleInputs = (inputs: typeof signForm) => {
    email = inputs.email;
    password = inputs.password;
  };
  const handleSubmitForm = () => signInStartWitheEmail(email, password);

  return (
    <div className={style.formWrapper}>
      <h2>Log In Here</h2>
      <span>Sign up with your email and password</span>
      <Forms
        inputs={signForm}
        onSubmitForm={handleSubmitForm}
        inputsUpdate={handleInputs}
      >
        <Button type="submit">SIGN IN </Button>
        <Button
          type="button"
          buttonType="google-sign-in"
          onClick={() => signInWithGoogle()}
        >
          Sign in with google
        </Button>
      </Forms>
    </div>
  );
};

const SignUpForm: FC = () => {
  const { createSingUpStart } = useUser();
  let email: string;
  let password: string;
  let displayName: string;
  let confirmPassword: string;
  const handleInputs = (inputs: typeof signUpForm) => {
    email = inputs.email;
    password = inputs.password;
    displayName = inputs.displayName;
    confirmPassword = inputs.confirmPassword;
  };
  const handleSubmitForm = () => {
    if (confirmPassword === password) {
      createSingUpStart(displayName, email, password);
    } else {
      alert(`password doesn't match withe the confirmation`);
    }
  };
  return (
    <div className={style.formWrapper}>
      <h2>Log In Here</h2>
      <span>Sign up with your email and password</span>
      <Forms
        inputs={signUpForm}
        onSubmitForm={handleSubmitForm}
        inputsUpdate={handleInputs}
      >
        <Button type="submit">Submit</Button>
      </Forms>
    </div>
  );
};

export const Authentication: FC = () => {
  return (
    <div className={style["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
