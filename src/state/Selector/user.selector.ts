import { createSelector } from "reselect";

import { RootState } from "..";

import { UserState } from "../Reducers/user.reducer";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
