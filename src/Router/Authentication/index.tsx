// import { SignIn } from "./SignIn";
import style from "./style/Authentication.module.scss";
import { FormInput, BUTTON_TYPE_CLASSES, Button } from "../../component";
import { useState } from "react";
import { useUser } from "../../hooks";

const signForm = {
  email: "",
  password: "",
};
function SignInForm() {
  const [formField, setFormField] = useState(signForm);
  const { email, password } = formField;
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const { googleLogin, emailLogin } = useUser();

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormField(signForm);
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
            onClick={() => googleLogin()}
          >
            Sign in with google
          </Button>
        </div>
      </form>
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
  const [formField, setFormField] = useState(signUpForm);
  const { displayName, email, password, confirmPassword } = formField;
  const { createUser } = useUser();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  async function submitHandle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("your password does not match");
      return;
    }
    setFormField(signUpForm);
    createUser(displayName, email, password);
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
export function Authentication() {
  return (
    <div className={style["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
