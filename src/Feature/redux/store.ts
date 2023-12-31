import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@redux/Cart/SliceCart";
import userSlice from "@redux/Authentication/SliceAuthentication";
import catagoriesSlice from "@redux/Catagories/SliceCategories";
import rootSage from "@redux/rootSaga";
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
type ActionDispatch = typeof store.dispatch;
const useAppDispatch: () => ActionDispatch = useDispatch;
sagaMiddleWare.run(rootSage);
const useSelectors: TypedUseSelectorHook<RootState> = useSelector;

export default store;
export { useSelectors, useAppDispatch };
