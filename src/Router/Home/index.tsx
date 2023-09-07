import style from "./HomeDirectory.module.scss";
import { CATAGORIES } from "../../Assets/CATAGORIES";
import { Link } from "react-router-dom";
import { useDispatchAction } from "../../Feature/store";
import { useEffect } from "react";
const CategoryPage = ({ items }) => {
  const { imageUrl, title } = items;
  return (
    <div className={style["directory-container"]}>
      <div
        className={style["background-image"]}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={style.body}>
        <Link to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};
export function HomeDirectory() {
  const { fetchCatagoriesStart } = useDispatchAction();
  useEffect(() => {
    fetchCatagoriesStart();
  }, [fetchCatagoriesStart]);
  const homePage = CATAGORIES.map((category, id) => (
    <CategoryPage key={id} items={category} />
  ));
  return <div className={style["Directories-container"]}>{homePage}</div>;
}
