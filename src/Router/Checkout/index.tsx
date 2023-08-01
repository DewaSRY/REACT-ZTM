import style from "./Checkout.module.scss";
import { useCart } from "../../hooks";
import { Chevron, CHEVRON_TYPE_CLASSES } from "../../component";
// import style from "./style/CheckoutItem.module.scss";
import { CartItem } from "../../state";
const CheckoutItem = ({ cartItem }: { cartItem: CartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItem } = useCart();
  return (
    <div className={style["checkout-item-container"]}>
      <div className={style["image-container"]}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={style.name}> {name} </span>
      <span className={style.quantity}>
        <Chevron
          chevron={CHEVRON_TYPE_CLASSES.LEFT}
          onClick={() => removeItem(cartItem)}
        />
        <span className={style.value}>{quantity}</span>
        <Chevron
          chevron={CHEVRON_TYPE_CLASSES.RIGHT}
          onClick={() => addItem(cartItem)}
        />
      </span>
      <span className={style.price}> {price}</span>
      <Chevron
        chevron={CHEVRON_TYPE_CLASSES.CROSS}
        onClick={() => clearItem(cartItem)}
      />
    </div>
  );
};
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
      {cartItems.length > 0 ? CheckOutItems : <h1>Shope Now</h1>}
      <div className={style["total"]}>TOTAL: ${cartTotal}</div>
    </div>
  );
}
