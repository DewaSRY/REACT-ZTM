import { ShoppingBags } from "../../Assets";
import { useNavigate } from "react-router-dom";
import style from "./style/CartIcon.module.scss";
import { useCart } from "../../hooks";
export function CartIcon() {
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  function CartHalle() {
    if (!cartCount) {
      return navigate("/checkout");
    }
    setIsCartOpen();
  }
  return (
    <div className={style["cart-icon-container"]} onClick={CartHalle}>
      <ShoppingBags className={style["shopping-icon"]} />
      <span className={style["item-count"]}>{cartCount}</span>
    </div>
  );
}
