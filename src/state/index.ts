import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer, PersistConfig } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Saga";
import { rootReducer } from "./Reducers";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(sagaMiddleware));

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
// export type DispatchState=RootState['']
export * from "./types";
export * from "./Action-Type";
export * from "./Selector";
