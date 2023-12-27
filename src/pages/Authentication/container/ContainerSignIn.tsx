import {
  FC,
  HTMLAttributes,
  useState,
  ChangeEventHandler,
  useCallback,
} from "react";
// import { useDispatchAction } from "@redux/store";
import useSignUp from "@/feature/redux/Authentication/hooks/useSignUp";
// import style from "./Authentication.module.scss";
import Forms from "@common/Form";
import Input from "@common/Input";
import Button from "@common/Button";

const signUpForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface ContainerSigningProps extends HTMLAttributes<HTMLDivElement> {}
type ContainerSignInComponents = FC<ContainerSigningProps>;
const ContainerSignIn: ContainerSignInComponents = () => {
  const { signUpStart } = useSignUp();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setFormsFields({ ...formsFields, [name]: value });
  };
  const [formsFields, setFormsFields] = useState<typeof signUpForm>(signUpForm);
  const handleSubmitForm = useCallback(() => {
    const { confirmPassword, displayName, password, email } = formsFields;
    if (confirmPassword === password) {
      signUpStart(displayName, email, password);
    } else {
      alert(`password doesn't match withe the confirmation`);
    }
  }, []);
  return (
    <Forms onSubmit={handleSubmitForm}>
      <h2 className="text-center text-3xl">SignUp Forms</h2>
      <Input onChange={handleChange} label="displayName" />
      <Input onChange={handleChange} label="email" />
      <Input onChange={handleChange} label="password" />
      <Input onChange={handleChange} label="confirmPassword" />
      <Button type="submit">Submit</Button>
    </Forms>
  );
};

export default ContainerSignIn;
