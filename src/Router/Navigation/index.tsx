import { Crwn } from "../../Assets";
import { CartDropDown } from "./CartDropDown";
import { CartIcon } from "./CartIcon";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/Firebase.utils";
import style from "./style/Navigation.module.scss";
import { useUser, useCart } from "../../hooks";
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
function SignInLink() {
  return (
    <Link className={style["nav-link"]} to="Authentication">
      SIGN IN
    </Link>
  );
}
function SignOutLink() {
  return (
    <span className={style["nav-link"]} onClick={signOutUser}>
      SIGN OUT
    </span>
  );
}
