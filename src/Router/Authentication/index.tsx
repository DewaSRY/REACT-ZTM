// import { SignIn } from "./SignIn";
import style from "./Authentication.module.scss";
import { BUTTON_TYPE_CLASSES, Button, Forms } from "../../component";
import { useUser } from "../../hooks";

const signForm = {
  email: "",
  password: "",
};
function SignInForm() {
  const { googleLogin, emailLogin } = useUser();
  let email: string;
  let password: string;
  const handleInputs = (inputs: typeof signForm) => {
    email = inputs.email;
    password = inputs.password;
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailLogin(email, password);
  };
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
          buttonType={BUTTON_TYPE_CLASSES.GOOGLE}
          onClick={() => googleLogin()}
        >
          Sign in with google
        </Button>
      </Forms>
    </div>
  );
}
const signUpForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const { createUser } = useUser();
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
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword === password) {
      createUser(displayName, email, password);
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
}

export function Authentication() {
  return (
    <div className={style["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
