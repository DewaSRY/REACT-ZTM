import style from "./Checkout.module.scss";
import { useDispatchAction, useSelectors } from "../Feature/store";
import { Chevron } from "../component";
import { CartItem } from "../utils/typeUtil";
import { FC } from "react";
const CheckoutItem: FC<{ cartItem: CartItem }> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addCartItem, removeCartItem, clearCartItem } = useDispatchAction();
  return (
    <div className={style["checkout-item-container"]}>
      <div className={style["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={style.name}> {name} </span>
      <span className={style.quantity}>
        <Chevron
          chevron="left-arrow"
          onClick={() => removeCartItem(cartItem.id)}
        />
        <span className={style.value}>{quantity}</span>
        <Chevron chevron="right-arrow" onClick={() => addCartItem(cartItem)} />
      </span>
      <span className={style.price}> {price}</span>
      <Chevron chevron="cross" onClick={() => clearCartItem(cartItem.id)} />
    </div>
  );
};
const HeadTable = ["Product", "Description", "Quantity", "Price", "Remove"];

export const Checkout: FC = () => {
  const { cartItems } = useSelectors((s) => s.cart);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const CheckOutItems = cartItems.map((item) => (
    <CheckoutItem key={item.id} cartItem={item} />
  ));

  const headTable = HeadTable.map((block, id) => (
    <div key={id} className={style["header-block"]}>
      <span>{block}</span>
    </div>
  ));

  return (
    <div className={style["checkout-container"]}>
      <div className={style["checkout-header"]}>{headTable}</div>
      {cartItems.length > 0 ? CheckOutItems : <h1>Shope Now</h1>}
      <div className={style["total"]}>TOTAL: ${cartTotal}</div>
    </div>
  );
};
