export interface ICartState {
  isCartOpen: boolean;
  cartItems: ProductItems[];
  cartCount: number;
  cartTotal: number;
}
export enum CartActionType {
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
  SET_CART_ITEMS = "SET_CART_ITEMS",
}
export interface ProductItems {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ICartContext {
  isCartOpen: boolean;
  cartItems: ProductItems[];
  cartCount: number;
  cartTotal: number;
  setIsCartOpen: () => void;
  addItems: (product: ProductItems) => void;
  removeItems: (product: ProductItems) => void;
  clearItems: (product: ProductItems) => void;
}

interface cartPayload {
  cartItems: ProductItems[];
  cartCount: number;
  cartTotal: number;
}
interface SetCartItems {
  type: CartActionType.SET_CART_ITEMS;
  payload: cartPayload;
}
interface SetCartOpen {
  type: CartActionType.SET_IS_CART_OPEN;
}

export type Action = SetCartItems | SetCartOpen;
