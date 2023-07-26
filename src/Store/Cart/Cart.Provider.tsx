import { useReducer, PropsWithChildren } from "react";
import { CartContext } from "./Cert.Context";
import { CartActionType, ProductItems } from "./Cart.Type";
import { addCartItem, clearCartItem, removeCartItem } from "./Cart.Action";
import { CartReducer } from "./Cart.Reducer";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [initiateState, dispatch] = useReducer(CartReducer, {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
  });
  const { isCartOpen, cartItems, cartCount, cartTotal } = initiateState;
  const updateCartItemsReducer = (items: ProductItems[]) => {
    const newCartCount = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newCartTotal = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };
    dispatch({
      type: CartActionType.SET_CART_ITEMS,
      payload: payload,
    });
  };

  const addItems = (items: ProductItems) => {
    const newCartItems = addCartItem(cartItems, items);
    updateCartItemsReducer(newCartItems);
  };
  const removeItems = (items: ProductItems) => {
    const newCartItems = removeCartItem(cartItems, items);
    updateCartItemsReducer(newCartItems);
  };
  const clearItems = (items: ProductItems) => {
    const newCartItems = clearCartItem(cartItems, items);
    updateCartItemsReducer(newCartItems!);
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
