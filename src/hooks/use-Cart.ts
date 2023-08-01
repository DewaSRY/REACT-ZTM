import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectIsCartOpen,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  CategoryItem,
  RootState,
  CartItem,
} from "../state";
import { CartAction } from "../state/Action-Type";
export function useCart() {
  const typeSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cartItems = typeSelector(selectCartItems);
  const cartCount = typeSelector(selectCartCount);
  const cartTotal = typeSelector(selectCartTotal);
  const isCartOpen = typeSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const {
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  } = bindActionCreators(CartAction, dispatch);
  const openCart = () => setIsCartOpen();
  const addItem = (item: CategoryItem | CartItem) =>
    addItemToCart(cartItems, item);
  const removeItem = (item: CartItem) => removeItemFromCart(cartItems, item);
  const clearItem = (item: CartItem) => clearItemFromCart(cartItems, item);
  return {
    openCart,
    addItem,
    removeItem,
    clearItem,
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
  };
}
