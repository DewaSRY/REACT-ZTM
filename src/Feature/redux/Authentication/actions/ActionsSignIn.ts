import { UserData } from "@/utils/Firebase.utils";
import { createAction } from "@reduxjs/toolkit";

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

export default {
  googleSignInStart,
  signInFailed,
  signInSuccess,
  emailSignInStart,
};
