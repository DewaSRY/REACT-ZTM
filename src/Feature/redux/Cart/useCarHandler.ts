import { CategoryItem } from "@utils/typeUtil";
import SliceCart from "@redux/Cart/SliceCart";
import { ActionDispatch } from "@redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
export default function useCarHandler() {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
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
