import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLDivElement> {
  label: string;
}
type InputComponents = FC<InputProps>;
const Input: InputComponents = ({ label, ...resProps }) => {
  console.log(label);
  return (
    <label className=" w-11/12 flex flex-col my-4">
      {label}
      <input
        name={label}
        {...resProps}
        className={
          `${resProps.className ? resProps.className : ""}` +
          " border-b-2 outline-none"
        }
      />
    </label>
  );
};
export default Input;
