import { useContext } from "react";
import { CartContext } from "../Store";
export function useCart() {
  return useContext(CartContext);
}
