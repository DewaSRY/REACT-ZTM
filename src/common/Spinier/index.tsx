import { FC, HTMLAttributes, PropsWithChildren } from "react";
import "@style/common/spinier.css";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        `${resProps.className ? resProps.className : ""}` +
        " w-full h-full flex justify-center items-center"
      }
    >
      <span className="spin w-[4rem] h-[4rem] border-t-gray-500 border-[15px] rounded-full " />
    </div>
  );
};

export default index;
