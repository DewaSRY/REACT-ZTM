export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

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
