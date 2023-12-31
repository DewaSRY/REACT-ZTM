import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CategoryItem } from "@utils/typeUtil";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [] as CartItem[],
    isCartOpen: false,
  },
  reducers: {
    addCartItem(state, action: PayloadAction<CategoryItem>) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      existingItem
        ? ++existingItem.quantity
        : state.cartItems.push({ ...newItem, quantity: 1 });
    },
    removeCartItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      if (existingItem.quantity > 1) {
        --existingItem.quantity;
      } else {
        console.log(existingItem.quantity);
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },
    clearCartItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export default cartSlice;
