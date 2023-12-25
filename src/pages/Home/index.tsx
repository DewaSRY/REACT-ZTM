import { FC, HTMLAttributes } from "react";
import CATAGORIES from "@/assets/data/CATAGORIES";
import CardsCategory from "./components/CardsCategory";
interface HomeDirectoryProps extends HTMLAttributes<HTMLDivElement> {}
type HomeDirectoryComponents = FC<HomeDirectoryProps>;
const HomeDirectory: HomeDirectoryComponents = ({ ...resProps }) => {
  return (
    <div
      className={
        "w-full  max-h-[78rem] flex flex-wrap justify-between" +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {CATAGORIES.map((category, id) => (
        <CardsCategory
          key={id}
          imageUrl={category.imageUrl}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default HomeDirectory;
