import { useContext } from "react";
import { ProductsContext } from "../Store";
export function useProducts() {
  return useContext(ProductsContext);
}
