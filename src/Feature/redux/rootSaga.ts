import { all, call } from "typed-redux-saga";
import userSagas from "@redux/Authentication/saga";
import categoriesSaga from "@redux/Catagories/saga";

export default function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
