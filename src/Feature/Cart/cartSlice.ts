import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CategoryItem } from "../../utils/typeUtil";
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
        ? existingItem.quantity + 1
        : state.cartItems.push({ ...newItem, quantity: 1 });
    },
    removeCartItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      existingItem
        ? existingItem.quantity - 1
        : state.cartItems.filter((i) => i.id !== itemId);
    },
    clearCartItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      if (existingItem) state.cartItems.filter((i) => i.id !== itemId);
    },
    setCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export default cartSlice;
