import { CartActionType } from "../Action-Type/cart.action";
import { CartItem, CART_ACTION_TYPES } from "../types/cart.types";
export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};
export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};
export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return state;
  }
};
