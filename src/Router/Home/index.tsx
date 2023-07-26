import { CATAGORIES } from "../../Assets/CATAGORIES";
import { Link } from "react-router-dom";

import style from "./style/HomeDirectory.module.scss";

export function HomeDirectory() {
  const homePage = CATAGORIES.map((category, id) => (
    <CategoryPage key={id} items={category} />
  ));
  return <div className={style["Directories-container"]}>{homePage}</div>;
}
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