import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";
import cartSlice from "@redux/Cart/SliceCart";
import userSlice from "@redux/Authentication/SliceAuthentication";

import catagoriesSlice from "@redux/Catagories/SliceCategories";

import rootSage from "@redux/rootSaga";

import { useCallback } from "react";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [catagoriesSlice.name]: catagoriesSlice.reducer,
    [userSlice.name]: userSlice.reducer,
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

sagaMiddleWare.run(rootSage);
export const useSelectors: TypedUseSelectorHook<RootState> = useSelector;

export function useDispatchAction() {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const { fetchCatagoriesStart: startFetch } = bindActionCreators(
    catagoriesSlice.actions,
    dispatch
  );
  const fetchCatagoriesStart = useCallback(startFetch, []);

  return {
    fetchCatagoriesStart,
  };
}
export default store;
