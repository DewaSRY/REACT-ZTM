import { CategoryItem } from "@utils/typeUtil";
import SliceCart from "@redux/Cart/SliceCart";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { dispatch } from "@redux/store";
export default function useCarHandler() {
  const { addCartItem, clearCartItem, removeCartItem, toggleCart } = useMemo(
    () => bindActionCreators(SliceCart.actions, dispatch),
    [dispatch]
  );

  const handleClearItems = (id: number) => () => {
    clearCartItem(id);
  };
  const handledAddCartItem = (product: CategoryItem) => () => {
    addCartItem(product);
  };
  const handledRemoveCartItem = (id: number) => () => {
    removeCartItem(id);
  };

  return {
    handleClearItems,
    handledAddCartItem,
    handledRemoveCartItem,
    toggleCart,
  };
}
