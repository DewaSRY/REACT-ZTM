import { takeLatest, call, put, all } from "typed-redux-saga";

import { getCategoriesAndDocuments } from "../../utils";
import catagoriesSlice from "./catagoriesSlice";
const { fetchCatagoriesStart, fetchCatagoriesFailed, fetchCatagoriesSuccess } =
  catagoriesSlice.actions;

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCatagoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCatagoriesFailed(error as Error));
  }
}
export function* onFetchCategories() {
  yield* takeLatest(fetchCatagoriesStart.type, fetchCategoriesAsync);
}
export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
