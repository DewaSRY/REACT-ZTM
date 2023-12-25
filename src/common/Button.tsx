import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";

export const enum ButtonsType {
  BASE = "",
  GoogleSignIn = " bg-blue-400 border-blue-400  text-white",
  Inverted = "",
}
interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonsType?: ButtonsType;
}
type ButtonsComponents = FC<ButtonsProps> & PropsWithChildren;
const Buttons: ButtonsComponents = ({ children, ButtonsType, ...resProps }) => {
  return (
    <button
      {...resProps}
      className={
        `${resProps.className ? resProps.className : ""}` +
        "  px-4 py-2 border rounded-md " +
        " hover:brightness-75 transition-all" +
        ` ${ButtonsType ? ButtonsType : " "} `
      }
    >
      {children}
    </button>
  );
};

export default Buttons;
