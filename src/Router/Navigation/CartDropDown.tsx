import style from "./style/CartDropDown.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component/Button";
import { CartItem } from "./CartItems";
import { useCart } from "../../hooks";
export function CartDropDown() {
  const { cartItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen();
  };
  const CartDropdownItems = cartItems.map((item) => (
    <CartItem key={item.id} cartItem={item} />
  ));
  return (
    <div className={style["cart-dropdown-container"]}>
      <div className={style["cart-items"]}>{CartDropdownItems}</div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
}
