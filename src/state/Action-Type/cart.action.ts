import { CategoryItem } from "../types/category.types";
import { CART_ACTION_TYPES, CartItem } from "../types/cart.types";
// import {
//   createAction,
//   withMatcher,
//   Action,
//   ActionWithPayload,
// } from "../../utils/reducer/reducer.utils";
export type SetIsCartOpen = {
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN;
  payload: boolean;
};
export type SetCartItems = {
  type: CART_ACTION_TYPES.SET_CART_ITEMS;
  payload: CartItem[];
};
export type CartActionType = SetIsCartOpen | SetCartItems;

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean: boolean): SetIsCartOpen => {
  return {
    type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
    payload: boolean,
  };
};
export const setCartItems = (cartItems: CartItem[]): SetCartItems => {
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: cartItems,
  };
};
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};
export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
