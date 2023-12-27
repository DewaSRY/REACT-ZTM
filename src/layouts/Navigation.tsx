import style from "./Navigation.module.scss";
import { Crwn, ShoppingBags } from "../assets/svg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelectors } from "@redux/store";
import Button from "@common/Button";
import { FC } from "react";
import useCarHandler from "@/feature/redux/Cart/hooks/useCarHandler";
import useSignOut from "@redux/Authentication/hooks/useSignOut";
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

const SignOutLink = ({ onCLick }: { onCLick: () => void }) => (
  <span className={style["nav-link"]} onClick={onCLick}>
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
  const { cartItems } = useSelectors((s) => s.cart);
  const { toggleCart } = useCarHandler();
  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  const navigate = useNavigate();

  function CartHalle() {
    if (!cartCount) return navigate("/checkout");
    toggleCart();
  }
  return (
    <div className={style["cart-icon-container"]} onClick={CartHalle}>
      <ShoppingBags className={style["shopping-icon"]} />
      <span className={style["item-count"]}>{cartCount}</span>
    </div>
  );
};

const CartDropDown: FC = () => {
  const { cartItems } = useSelectors((s) => s.cart);
  const { toggleCart } = useCarHandler();

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    toggleCart();
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
const Navigation: FC = () => {
  const { currentUser } = useSelectors((s) => s.users);
  const { isCartOpen } = useSelectors((s) => s.cart);
  const { signOutStart } = useSignOut();
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
          {currentUser ? (
            <SignOutLink onCLick={signOutStart} />
          ) : (
            <SignInLink />
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
