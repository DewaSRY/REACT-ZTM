import { Product } from "./Product.type";
export interface ICartState {
  isCartOpen: boolean;
  cartItems: CartItems[];
  cartCount: number;
  cartTotal: number;
}
export interface CartItems extends Product {
  quantity: number;
}
export interface ICartContext {
  isCartOpen: boolean;
  cartItems: CartItems[];
  cartCount: number;
  cartTotal: number;
  setIsCartOpen: () => void;
  addItems: (product: Product) => void;
  removeItems: (product: Product) => void;
  clearItems: (product: Product) => void;
}
export enum CartActionType {
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
  SET_CART_ITEMS = "SET_CART_ITEMS",
}
interface SetItemsAction {
  type: CartActionType.SET_CART_ITEMS;
  payload: {
    cartItems: CartItems[];
    cartCount: number;
    cartTotal: number;
  };
}
interface SetCartAction {
  type: CartActionType.SET_IS_CART_OPEN;
}
export type CartAction = SetCartAction | SetItemsAction;
