import style from "./Shop.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Button, BUTTON_TYPE_CLASSES } from "../../component";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProducts } from "../../hooks";

import { useCart } from "../../hooks";
const Card = ({ items }) => {
  const { addItems } = useCart();
  const { imageUrl, price, name } = items;
  return (
    <div className={style["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={style.footer}>
        <span className={style.name}>{name}</span>
        <span className={style.price}>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.INVERTED}
        onClick={() => addItems(items)}
      >
        Add Item
      </Button>
    </div>
  );
};

const Previews = () => {
  const { cataGoriesMap } = useProducts();
  return (
    <>
      {Object.keys(cataGoriesMap).map((key) => {
        const products = cataGoriesMap[key];
        return <Preview key={key} title={key} products={products} />;
      })}
    </>
  );
};
const Preview = ({ title, products }) => {
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

const Products = () => {
  const { cataGoriesMap } = useProducts();
  const { category } = useParams();
  const [products, setProducts] = useState(cataGoriesMap[category]);
  useEffect(() => {
    const product = cataGoriesMap[category];
    setProducts(product);
  }, [category, cataGoriesMap]);
  return (
    <>
      <h2 className={style["category-title"]}>{category.toUpperCase()}</h2>
      <div className={style["category-container"]}>
        {products &&
          products.map((product) => <Card key={product.id} items={product} />)}
      </div>
    </>
  );
};
export function Shope() {
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":category" element={<Products />} />
    </Routes>
  );
}
