import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";
import { all, call } from "typed-redux-saga";
import cartSlice from "./Cart/cartSlice";
import userSlice, { userAction } from "./User/userSlice";
import catagoriesSlice from "./Catagorise/catagoriesSlice";
import { categoriesSaga } from "./Catagorise/catagoriesSaga";
import { userSagas } from "./User/userSaage";
import { useMemo } from "react";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    catagories: catagoriesSlice.reducer,
    users: userSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({
      serializableCheck: false,
    })
      .concat(sagaMiddleWare)
      .concat(logger);
  },
});

type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;

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
  const {
    googleSignInStart,
    emailSignInStart,
    signUpStart,
    signOutStart,
    checkUserSession,
  } = bindActionCreators(userAction, dispatch);

  return {
    ...bindActionCreators(cartSlice.actions, dispatch),
    googleSignInStart,
    emailSignInStart,
    signUpStart,
    signOutStart,
    checkUserSession,
    fetchCatagoriesStart,
  };
}
export default store;
