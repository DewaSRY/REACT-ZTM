import { FC, PropsWithChildren, FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}
type FormComponents = FC<FormProps> & PropsWithChildren;
const Form: FormComponents = ({ children, ...resProps }) => {
  return (
    <form
      {...resProps}
      className={
        `${resProps.className ? resProps.className : ""}` +
        " w-11/12 flex flex-col"
      }
    >
      {children}
    </form>
  );
};

export default Form;
