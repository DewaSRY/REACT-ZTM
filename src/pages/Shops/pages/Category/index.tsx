import { useParams } from "react-router-dom";
import { FC, useMemo } from "react";
import style from "./Shop.module.scss";
import { useSelectors } from "@feature/store";

import Card from "@/components/CardsProduct";
const CategoryProducts: FC = () => {
  const { category } = useParams();
  const { categoryMap } = useSelectors((s) => s.catagories);
  const products = useMemo(() => categoryMap[category], [category]);
  return (
    <>
      <h2 className={style["category-title"]}>{category.toUpperCase()}</h2>
      <div className={style["category-container"]}>
        {products
          ? products.map((product) => <Card key={product.id} items={product} />)
          : null}
      </div>
    </>
  );
};

export default CategoryProducts;
