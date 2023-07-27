import style from "./style/Forms.module.scss";
import { Inputs } from "./Input";
import {
  useState,
  FormHTMLAttributes,
  useEffect,
  useMemo,
  FormEvent,
} from "react";
interface Inputs {
  [key: string]: string;
}
type IForm = {
  inputs: Inputs;
  inputsUpdate: (arg: Inputs) => void;
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export function Forms({ inputs, inputsUpdate, onSubmitForm, children }: IForm) {
  const [formField, setFormField] = useState(inputs);
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const formsInput = useMemo(() => formField, [formField]);
  useEffect(() => {
    const typing = setTimeout(() => {
      inputsUpdate(formsInput);
    }, 500);
    return () => {
      clearTimeout(typing);
    };
  }, [formsInput, inputsUpdate]);
  const InputsForm = Object.keys(formField).map((fields, id) => {
    const formValue = formField[fields];
    return (
      <Inputs
        key={id}
        label={fields.toLocaleUpperCase()}
        onChange={handelChange}
        name={fields}
        value={formValue}
        required
      />
    );
  });
  return (
    <form className={style.formWrapper} onSubmit={onSubmitForm}>
      {InputsForm}
      <div className={style["buttons-container "]}>{children}</div>
    </form>
  );
}
