import style from "./Checkout.module.scss";
import { useCart } from "../../hooks";
import { Chevron } from "../../component";
import { CartItem } from "../../state";
import { FC } from "react";
const CheckoutItem: FC<{ cartItem: CartItem }> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItem } = useCart();
  return (
    <div className={style["checkout-item-container"]}>
      <div className={style["image-container"]}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={style.name}> {name} </span>
      <span className={style.quantity}>
        <Chevron chevron="left-arrow" onClick={() => removeItem(cartItem)} />
        <span className={style.value}>{quantity}</span>
        <Chevron chevron="right-arrow" onClick={() => addItem(cartItem)} />
      </span>
      <span className={style.price}> {price}</span>
      <Chevron chevron="cross" onClick={() => clearItem(cartItem)} />
    </div>
  );
};
const HeadTable = ["Product", "Description", "Quantity", "Price", "Remove"];


export const Checkout: FC = () => {
  const { cartTotal, cartItems } = useCart();
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
