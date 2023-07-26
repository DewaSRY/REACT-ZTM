import {
  createContext,
  useState,
  useCallback,
  useEffect,
  PropsWithChildren,
} from "react";
import { getCategoriesAndDocuments } from "../../utils/Firebase.utils";
import { IProductContex, ProductMap } from "./Product.type";
export const ProductsContext = createContext<IProductContex>({
  cataGoriesMap: {},
  fetchCatagories: () => {},
});

export const ProductseProvider = ({ children }: PropsWithChildren) => {
  const [cataGoriesMap, setCataGoriesMap] = useState<ProductMap>({});

  const fetchCatagories = useCallback(async () => {
    const catagorieMap = await getCategoriesAndDocuments();
    setCataGoriesMap(catagorieMap);
  }, []);
  const value = { cataGoriesMap, fetchCatagories };
  useEffect(() => {
    fetchCatagories();
  }, [fetchCatagories]);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
