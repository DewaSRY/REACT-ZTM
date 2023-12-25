import { CategoryItem } from "@utils/typeUtil";
import SliceCart from "@redux/Cart/SliceCart";
import { ActionDispatch } from "@redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
export default function useCarHandler(product: CategoryItem) {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const { addCartItem, clearCartItem, removeCartItem } = useMemo(
    () => bindActionCreators(SliceCart.actions, dispatch),
    [dispatch]
  );

  const handleClearItems = () => () => {
    clearCartItem(product.id);
  };
  const handledAddCartItem = () => () => {
    console.log("halloo");
    addCartItem(product);
  };
  const handledRemoveCartItem = () => () => {
    removeCartItem(product.id);
  };

  return {
    handleClearItems,
    handledAddCartItem,
    handledRemoveCartItem,
  };
}
