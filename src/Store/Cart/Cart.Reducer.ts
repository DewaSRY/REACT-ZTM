import { CartActionType, ICartState, Action } from "./Cart.Type";
export const CartReducer = (state: ICartState, action: Action) => {
  const { type } = action;
  switch (type) {
    case CartActionType.SET_CART_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    case CartActionType.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
};
