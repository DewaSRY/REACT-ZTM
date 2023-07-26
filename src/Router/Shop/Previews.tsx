//
import style from "./style/Preview.module.scss";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks";
export function Previews() {
  const { cataGoriesMap } = useProducts();

  return (
    <>
      {Object.keys(cataGoriesMap).map((key) => {
        const products = cataGoriesMap[key];
        return <Preview key={key} title={key} products={products} />;
      })}
    </>
  );
}
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
