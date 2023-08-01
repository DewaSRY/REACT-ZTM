import { combineReducers } from "redux";

import { userReducer } from "./Reducers/user.reducer";
import { categoriesReducer } from "./Reducers/category.reducer";
import { cartReducer } from "./Reducers/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
