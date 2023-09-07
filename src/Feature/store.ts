import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, call } from "typed-redux-saga";
import cartSlice from "./Cart/cartSlice";
import catagoriesSlice from "./Catagorise/catagoriesSlice";
import userSlice, { userAction } from "./User/userSlice";
import { categoriesSaga } from "./Catagorise/catagoriesSaga";
import { userSagas } from "./User/userSaage";
import { useMemo } from "react";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    catagories: catagoriesSlice.reducer,
    users: userSlice.reducer,
  },
  middleware: (md) => {
    return md().concat(sagaMiddleWare);
  },
});

type RootState = ReturnType<typeof store.getState>;
type ActionDispatch = typeof store.dispatch;

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
sagaMiddleWare.run(rootSaga);

export const useSelectors: TypedUseSelectorHook<RootState> = useSelector;
export function useDispatchAction() {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const { fetchCatagoriesStart } = useMemo(
    () => bindActionCreators(catagoriesSlice.actions, dispatch),
    [dispatch]
  );
  const { googleSignInStart, emailSignInStart, signUpStart, signOutStart } =
    bindActionCreators(userAction, dispatch);
  return {
    ...bindActionCreators(cartSlice.actions, dispatch),
    googleSignInStart,
    emailSignInStart,
    signUpStart,
    signOutStart,
    fetchCatagoriesStart,
  };
}
export default store;
