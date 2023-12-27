import {
  FC,
  HTMLAttributes,
  useState,
  ChangeEventHandler,
  useCallback,
} from "react";
import useSignIn from "@/feature/redux/Authentication/hooks/useSignIn";
// import style from "./Authentication.module.scss";
import Forms from "@common/Form";
import Input from "@common/Input";
import Button from "@common/Button";
const signForm = {
  email: "",
  password: "",
};
interface ContainerLogInProps extends HTMLAttributes<HTMLDivElement> {}
type ContainerLogInComponents = FC<ContainerLogInProps>;
const ContainerLogIn: ContainerLogInComponents = () => {
  const { googleSignInStart, emailSignInStart } = useSignIn();

  const [formsFields, setFormsFields] = useState<typeof signForm>(signForm);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setFormsFields({ ...formsFields, [name]: value });
  };
  const handleSignInWithGoogle = useCallback(() => googleSignInStart(), []);
  const handleSubmitForm = useCallback(
    () => emailSignInStart(formsFields.email, formsFields.password),
    []
  );
  return (
    <Forms onSubmit={handleSubmitForm}>
      <h2 className="text-center text-3xl">Login Forms</h2>
      <Input label="email" onChange={handleChange} />
      <Input label="password" onChange={handleChange} />
      <Button type="submit">SIGN IN </Button>
      <Button type="button" onClick={handleSignInWithGoogle}>
        Sign in with google
      </Button>
    </Forms>
  );
};

export default ContainerLogIn;
