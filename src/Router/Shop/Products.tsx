import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import stye from "./style/Catagories.module.scss";
import { useProducts } from "../../hooks";
export function Products() {
  const { cataGoriesMap } = useProducts();
  const { category } = useParams();
  const [products, setProducts] = useState(cataGoriesMap[category]);
  useEffect(() => {
    const product = cataGoriesMap[category];
    setProducts(product);
  }, [category, cataGoriesMap]);
  return (
    <>
      <h2 className={stye["category-title"]}>{category.toUpperCase()}</h2>
      <div className={stye["category-container"]}>
        {products &&
          products.map((product) => <Card key={product.id} items={product} />)}
      </div>
    </>
  );
}
