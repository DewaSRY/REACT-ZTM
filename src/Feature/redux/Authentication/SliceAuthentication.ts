import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@utils/Firebase.utils";
const nameAuthentications = "users";
const AuthenticationsInitialState = {
  currentUser: null as null | UserData,
  error: null as null | Error,
};
const userSlice = createSlice({
  name: nameAuthentications,
  initialState: AuthenticationsInitialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<UserData>) {
      state.currentUser = action.payload;
    },
    signInFailed(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    signOut(state) {
      state.currentUser = null;
    },
  },
});

export default userSlice;
