import {
  CATEGORIES_ACTION_TYPES,
  Category,
  FetchCategoriesStart,
  FetchCategoriesSuccess,
  FetchCategoriesFailed,
} from "../types/category.types";

export const fetchCategoriesStart = (): FetchCategoriesStart => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  };
};
export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
  };
};
export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};
