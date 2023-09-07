import style from "./Navigation.module.scss";
import { Crwn, ShoppingBags } from "../../Assets";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/Firebase.utils";
import { useUser, useCart } from "../../hooks";
import { Button } from "../../component";
import { FC } from "react";
interface CartItemProps {
  cartItem: {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  };
}

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
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
const CartIcon: FC = () => {
  const { cartCount, openCart } = useCart();
  const navigate = useNavigate();
  function CartHalle() {
    if (!cartCount) {
      return navigate("/checkout");
    }
    openCart();
  }
  return (
    <div className={style["cart-icon-container"]} onClick={CartHalle}>
      <ShoppingBags className={style["shopping-icon"]} />
      <span className={style["item-count"]}>{cartCount}</span>
    </div>
  );
};

const CartDropDown: FC = () => {
  const { cartItems, openCart } = useCart();
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    openCart();
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
export const Navigation: FC = () => {
  // const { currentUser } = useUser();
  // const { isCartOpen } = useCart();
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
          {/* {   ? <SignOutLink /> : <SignInLink />} */}
          <CartIcon />
        </div>
        {/* {isCartOpen && <CartDropDown />} */}
      </div>
      <Outlet />
    </>
  );
};
