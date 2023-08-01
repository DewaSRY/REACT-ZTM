import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./category.saga";
import { userSagas } from "./user.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
