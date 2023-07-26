import { CheckoutItem } from "./CheckoutItem";

import style from "./style/Checkout.module.scss";
import { useCart } from "../../hooks";
const HeadTable = ["Product", "Description", "Quantity", "Price", "Remove"];
export function Checkout() {
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
      {cartItems.length > 0 ? CheckOutItems : <h1>Sope noww</h1>}
      <div className={style["total"]}>TOTAL: ${cartTotal}</div>
    </div>
  );
}
