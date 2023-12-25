import { CategoryItem } from "@/utils/typeUtil";
import { FC, HTMLAttributes } from "react";
import CardsProduct from "../components/CardsProduct";
import { Link } from "react-router-dom";
interface ContainerProductProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  products: CategoryItem[];
  isPreviews?: boolean;
}
type ContainerProductComponents = FC<ContainerProductProps>;
const ContainerProduct: ContainerProductComponents = ({
  title,
  products,
  isPreviews = false,
  ...resProps
}) => {
  return (
    <div
      {...resProps}
      className={
        `${resProps.className ? resProps.className : ""}` +
        "flex flex-col mb-4 mx-1"
      }
    >
      {isPreviews ? (
        <Link to={title}>
          <span className={"text-2xl mb-6 cursor-pointer text-center "}>
            {title.toUpperCase()}
          </span>
        </Link>
      ) : (
        <span className={"text-2xl mb-6 cursor-pointer text-center block "}>
          {title.toUpperCase()}
        </span>
      )}
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <CardsProduct key={product.id} items={product} />
        ))}
      </div>
    </div>
  );
};

export default ContainerProduct;
