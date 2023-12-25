import style from "./Checkout.module.scss";
import { useDispatchAction, useSelectors } from "@feature/store";
import Buttons from "@/common/Button";
import { CartItem } from "@utils/typeUtil";
import { FC, HTMLAttributes } from "react";

interface ItemsProps extends HTMLAttributes<HTMLDivElement> {
  cartItem: CartItem;
}
type ItemsComponents = FC<ItemsProps>;
const Items: ItemsComponents = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addCartItem, removeCartItem, clearCartItem } = useDispatchAction();
  const handleClearItems = () => () => {
    clearCartItem(cartItem.id);
  };
  const handledAddCartItem = () => () => {
    addCartItem(cartItem);
  };
  const handledRemoveCartItem = () => () => {
    removeCartItem(cartItem.id);
  };
  return (
    <div className={style["checkout-item-container"]}>
      <div className={style["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={style.name}> {name} </span>
      <span className={style.quantity}>
        <Buttons onClick={handledRemoveCartItem}> {"<"}</Buttons>
        <span className={style.value}>{quantity}</span>
        <Buttons onClick={handledAddCartItem}> {">"}</Buttons>
      </span>
      <span className={style.price}> {price}</span>
      <Buttons onClick={handleClearItems}> {"X"}</Buttons>
    </div>
  );
};

interface CheckOutItemsProps extends HTMLAttributes<HTMLDivElement> {}
type CheckOutItemsComponents = FC<CheckOutItemsProps>;
const CheckOutItems: CheckOutItemsComponents = () => {
  const { cartItems } = useSelectors((s) => s.cart);

  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <Items key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <h1>Shope Now</h1>
      )}
    </>
  );
};

const HeadTable = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout: FC = () => {
  const { cartItems } = useSelectors((s) => s.cart);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className={style["checkout-container"]}>
      <div className={style["checkout-header"]}>
        {HeadTable.map((block, id) => (
          <div key={id} className={style["header-block"]}>
            <span>{block}</span>
          </div>
        ))}
      </div>
      <CheckOutItems />
      <div className={style["total"]}>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
