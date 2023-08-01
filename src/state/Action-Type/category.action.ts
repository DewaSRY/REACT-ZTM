import { CATEGORIES_ACTION_TYPES, Category } from "../types/category.types";

export type FetchCategoriesStart = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START;
};
export type FetchCategoriesSuccess = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
};

export type FetchCategoriesFailed = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED;
  payload: Error;
};
export type CatagoriesActionType =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

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
