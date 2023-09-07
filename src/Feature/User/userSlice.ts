import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { UserData, AdditionalInformation } from "../../utils";
import { User } from "firebase/auth";
const name = "users";

const userSlice = createSlice({
  name,
  initialState: {
    currentUser: null as null | UserData,
    error: null as null | Error,
  },
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
  // extraReducers(builder) {
  //   builder.addCase(checkUserSession, (state) => state);
  // },
});

const checkUserSession = createAction(`users/checkUserSession`);
const setCurrentUser = createAction(
  `users/setCurrentUser`,
  (user: UserData) => ({
    payload: user,
  })
);
const googleSignInStart = createAction(`users/googleSignInStart`);
const emailSignInStart = createAction(
  `users/emailSignInStart`,
  (email: string, password: string) => ({
    payload: {
      email,
      password,
    },
  })
);
const signInSuccess = createAction(
  `users/signInSuccess`,
  (user: UserData & { id: string }) => ({
    payload: user,
  })
);
const signInFailed = createAction(`users/signInFailed`, (error: Error) => ({
  payload: error,
}));
const signUpStart = createAction(
  `users/signUpStart`,
  (email: string, password: string, displayName: string) => ({
    payload: {
      email,
      password,
      displayName,
    },
  })
);
const signUpSuccess = createAction(
  `users/signUpSuccess`,
  (user: User, additionalDetails: AdditionalInformation) => ({
    payload: {
      user,
      additionalDetails,
    },
  })
);
const signUpFailed = createAction(`users/signUpFailed`, (error: Error) => ({
  payload: error,
}));
const signOutStart = createAction(`users/signOutStart`);
const signOutSuccess = createAction(`users/signOutSuccess`);
const signOutFailed = createAction(`users/signOutFailed`, (error: Error) => ({
  payload: error,
}));

export default userSlice;
export const userAction = {
  checkUserSession,
  setCurrentUser,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart,
  signOutSuccess,
  signOutFailed,
};
