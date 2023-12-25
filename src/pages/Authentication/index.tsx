// import style from "./Authentication.module.scss";

import { FC, HTMLAttributes } from "react";

import ContainerLogIn from "./container/ContainerLogIn";
import ContainerSignIn from "./container/ContainerSignIn";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = () => {
  return (
    <div className="w-11/12  m-[5%] grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4">
      <ContainerLogIn />
      <ContainerSignIn />
    </div>
  );
};

export default index;
