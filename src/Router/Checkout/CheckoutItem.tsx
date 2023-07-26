import { Chevron } from "../../component/Chevron";
import style from "./style/CheckoutItem.module.scss";
import { CHEVRON_TYPE_CLASSES } from "../../component/UI.types";
import { useCart } from "../../hooks";
export function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItems, removeItems, clearItems } = useCart();
  return (
    <div className={style["checkout-item-container"]}>
      <div className={style["image-container"]}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={style.name}> {name} </span>
      <span className={style.quantity}>
        <Chevron
          chevron={CHEVRON_TYPE_CLASSES.LEFT}
          onClick={() => removeItems(cartItem)}
        />
        <span className={style.value}>{quantity}</span>
        <Chevron
          chevron={CHEVRON_TYPE_CLASSES.RIGHT}
          onClick={() => addItems(cartItem)}
        />
      </span>
      <span className={style.price}> {price}</span>
      <Chevron
        chevron={CHEVRON_TYPE_CLASSES.CROSS}
        onClick={() => clearItems(cartItem)}
      />
    </div>
  );
}
