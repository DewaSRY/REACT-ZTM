import style from "./Navigation.module.scss";
import { useNavigate } from "react-router-dom";
import { Crwn, ShoppingBags } from "../../Assets";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/Firebase.utils";
import { useUser, useCart } from "../../hooks";
import { Button } from "../../component";
import { CartItems } from "../../Store";

const SignInLink = () => (
  <Link className={style["nav-link"]} to="Authentication">
    SIGN IN
  </Link>
);

const SignOutLink = () => (
  <span className={style["nav-link"]} onClick={signOutUser}>
    SIGN OUT
  </span>
);
const CartItem = ({ cartItem }: { cartItem: CartItems }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={style["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={style["item-details"]}>
        <h2 className={style.name}>{name}</h2>
        <span className={style.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
const CartIcon = () => {
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
};

const CartDropDown = () => {
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
};
export function Navigation() {
  const { currentUser } = useUser();
  const { isCartOpen } = useCart();
  return (
    <>
      <div className={style["navigation"]}>
        <Link className={style["logo-container"]} to="">
          <Crwn className={style["logo"]} />
        </Link>
        <div className={style["nav-links-container"]}>
          <Link className={style["nav-link"]} to="shop">
            Shop
          </Link>
          {currentUser ? <SignOutLink /> : <SignInLink />}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
}
