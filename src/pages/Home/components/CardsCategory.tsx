import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface CardsCategoryProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
}
type CardsCategoryComponents = FC<CardsCategoryProps>;
const CardsCategory: CardsCategoryComponents = ({
  title,
  imageUrl,
  ...resProps
}) => {
  return (
    <div
      {...resProps}
      className={
        "overflow-hidden flex-1 min-w-[20rem]  lg:min-w-[30%]  min-h[20rem] p-2 border-2 border-none rounded-3xl m-2  " +
        "flex justify-start items-end" +
        `${resProps.className ? resProps.className : ""}`
      }
      title={`${title} category`}
    >
      <img
        className={
          "w-full h-full object-cover bg-cover bg-center hover:scale-110 transition-transform "
        }
        src={imageUrl}
      />
      <div
        className={
          "absolute  bg-white opacity-65 border-black border-2 " +
          "h-[6rem] w-[8rem] flex items-center justify-center"
        }
      >
        <Link to={`shop/${title}`}>
          <h2 className="text-2xl font-bold text-gray-600 mr-3">{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CardsCategory;
