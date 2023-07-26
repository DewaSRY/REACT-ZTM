import { createContext } from "react";
import { ICartContext } from "./Cart.Type";

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
