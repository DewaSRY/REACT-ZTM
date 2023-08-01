import style from "./Shop.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Button, BUTTON_TYPE_CLASSES, Spinner } from "../../component";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProducts, useCart } from "../../hooks";
import { CategoryItem } from "../../state";

const Card = ({ items }: { items: CategoryItem }) => {
  const { addItem } = useCart();
  const { imageUrl, price, name } = items;
  const handleClick = () => addItem(items);
  return (
    <div className={style["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={style.footer}>
        <span className={style.name}>{name}</span>
        <span className={style.price}>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED} onClick={handleClick}>
        Add Item
      </Button>
    </div>
  );
};

const Previews = () => {
  const { cataGoriesMap, isLoading } = useProducts();
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
const Preview = ({
  title,
  products,
}: {
  title: string;
  products: CategoryItem[];
}) => {
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

const CategoryProducts = () => {
  const { category } = useParams();
  const { cataGoriesMap } = useProducts();
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
  const { fetchCategoriesStartAsync } = useProducts();
  useEffect(() => {
    fetchCategoriesStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
}
