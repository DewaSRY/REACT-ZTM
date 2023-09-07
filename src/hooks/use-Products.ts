import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
  RootState,
  CategoryAction,
} from "../state";
export function useProducts() {
  const typeSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cataGoriesMap = typeSelector(selectCategoriesMap);
  const isLoading = typeSelector(selectCategoriesIsLoading);
  const dispatch = useDispatch();
  const { fetchCategoriesStart } = useMemo(
    () => bindActionCreators(CategoryAction, dispatch),
    [dispatch]
  );
  return {
    cataGoriesMap,
    isLoading,
    fetchCategoriesStart,
  };
}
