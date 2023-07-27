import {
  CartActionType,
  ICartState,
  CartAction,
  ProductItems,
  Product,
} from "../store-type";
export const addCartItem = (items: ProductItems[], product: Product) => {
  const existingProduct = items.find((Item) => Item.id === product.id);
  if (existingProduct) {
    return items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...product, quantity: 1 }];
};
export const removeCartItem = (items: ProductItems[], product: Product) => {
  const existingProduct = items.find((Item) => Item.id === product.id);
  if (existingProduct?.quantity === 1) {
    return items.filter((item) => item.id !== product.id);
  }
  return items.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
export const clearCartItem = (items: ProductItems[], product: Product) => {
  const existingProduct = items.find((Item) => Item.id === product.id);
  if (existingProduct) {
    return items.filter((item) => item.id !== product.id);
  }
};
export const CartReducer = (state: ICartState, action: CartAction) => {
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
