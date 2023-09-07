import style from "./Shop.module.scss";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Button, Spinner } from "../component";
import { useState, useEffect, FC } from "react";
import { useDispatchAction, useSelectors } from "../Feature/store";
import { CategoryItem } from "../utils/typeUtil";

const Card: FC<{ items: CategoryItem }> = ({ items }) => {
  const { addCartItem } = useDispatchAction();
  const { imageUrl, price, name } = items;
  const handleClick = () => addCartItem(items);
  return (
    <div className={style["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={style.footer}>
        <span className={style.name}>{name}</span>
        <span className={style.price}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleClick}>
        Add Item
      </Button>
    </div>
  );
};

const Previews: FC = () => {
  const { categories, isLoading } = useSelectors((s) => s.catagories);
  const cataGoriesMap = categories.reduce((map, product) => {
    const { title, items } = product;
    map[title.toLowerCase()] = items;
    return map;
  }, {});
  console.log(categories);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(cataGoriesMap).map((key) => {
          const products = cataGoriesMap[key];
          return <Preview key={key} title={key} products={products} />;
        })
      )}
    </>
  );
};

const Preview: FC<{
  title: string;
  products: CategoryItem[];
}> = ({ title, products }) => {
  const previewCategory = products
    .filter((_, idx) => idx < 4)
    .map((product) => <Card key={product.id} items={product} />);
  return (
    <div className={style["category-preview-container"]}>
      <Link to={title}>
        <span className={style.title}>{title.toUpperCase()}</span>
      </Link>
      <div className={style.preview}>{previewCategory}</div>
    </div>
  );
};

const CategoryProducts: FC = () => {
  const { category } = useParams();
  const { categories } = useSelectors((s) => s.catagories);
  const cataGoriesMap = categories.reduce((map, product) => {
    const { title, items } = product;
    map[title.toLowerCase()] = items;
    return map;
  }, {});

  const [products, setProducts] = useState(cataGoriesMap[category]);
  useEffect(() => {
    const product = cataGoriesMap[category];
    setProducts(product);
  }, [category, cataGoriesMap]);
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
export function Shope() {
  const { fetchCatagoriesStart } = useDispatchAction();
  useEffect(() => {
    fetchCatagoriesStart();
  }, [fetchCatagoriesStart]);
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
}
