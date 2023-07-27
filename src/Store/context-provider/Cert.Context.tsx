import { useReducer, PropsWithChildren, createContext } from "react";
import { CartActionType, ICartContext, Product } from "../store-type";
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
  CartReducer,
} from "../action-context/Cart.Action";

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setIsCartOpen: () => {},
  addItems: () => {},
  removeItems: () => {},
  clearItems: () => {},
});
export const CartProvider = ({ children }: PropsWithChildren) => {
  const [initiateState, dispatch] = useReducer(CartReducer, {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
  });
  const { isCartOpen, cartItems, cartCount, cartTotal } = initiateState;
  const updateCartItemsReducer = (items: typeof cartItems) => {
    const newCartCount = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newCartTotal = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const payload = {
      cartItems: items,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };
    dispatch({
      type: CartActionType.SET_CART_ITEMS,
      payload: payload,
    });
  };
  const addItems = (items: Product) => {
    const newCartItems = addCartItem(cartItems, items);
    console.log(newCartItems);
    updateCartItemsReducer(newCartItems);
  };
  const removeItems = (items: Product) => {
    const newCartItems = removeCartItem(cartItems, items);
    updateCartItemsReducer(newCartItems);
  };
  const clearItems = (items: Product) => {
    const newCartItems = clearCartItem(cartItems, items);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = () =>
    dispatch({ type: CartActionType.SET_IS_CART_OPEN });
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    addItems,
    removeItems,
    clearItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
