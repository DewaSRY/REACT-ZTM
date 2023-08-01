import { CategoryItem } from "./category.types";

export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
export type SetIsCartOpen = {
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN;
};
export type SetCartItems = {
  type: CART_ACTION_TYPES.SET_CART_ITEMS;
  payload: CartItem[];
};
export type CartActionType = SetIsCartOpen | SetCartItems;

export const setCartItems = (cartItems: CartItem[]): SetCartItems => {
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: cartItems,
  };
};
