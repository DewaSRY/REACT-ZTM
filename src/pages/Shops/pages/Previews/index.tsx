import style from "./Shop.module.scss";
import { Link } from "react-router-dom";
import { useSelectors } from "@feature/store";
import { FC, useMemo } from "react";
import { CategoryItem } from "@utils/typeUtil";
import Card from "@/components/CardsProduct";
import Spinier from "@common/Spinier";
const Preview: FC<{
  title: string;
  products: CategoryItem[];
}> = ({ title, products }) => {
  const previewsProduct = useMemo(
    () => products.filter((_, idx) => idx < 4),
    []
  );

  return (
    <div className={style["category-preview-container"]}>
      <Link to={title}>
        <span className={style.title}>{title.toUpperCase()}</span>
      </Link>
      <div className={style.preview}>
        {previewsProduct.map((product) => (
          <Card key={product.id} items={product} />
        ))}
      </div>
    </div>
  );
};

const Previews: FC = () => {
  const { isLoading, categoryMap } = useSelectors((s) => s.catagories);
  return (
    <>
      {isLoading ? (
        <Spinier />
      ) : (
        Object.keys(categoryMap).map((key) => {
          const products = categoryMap[key];
          return <Preview key={key} title={key} products={products} />;
        })
      )}
    </>
  );
};

export default Previews;
