import { AdditionalInformation } from "@/utils/Firebase.utils";
import { createAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

const signUpStart = createAction(
  `users/signUpStart`,
  (email: string, password: string, displayName: string) => {
    return {
      payload: {
        email,
        password,
        displayName,
      },
    };
  }
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

export default { signUpStart, signUpFailed, signUpSuccess };
