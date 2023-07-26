import { Button, BUTTON_TYPE_CLASSES } from "../../component";
import style from "./style/Products.module.scss";
import { useCart } from "../../hooks";
export function Card({ items }) {
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
}
