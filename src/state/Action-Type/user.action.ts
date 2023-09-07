import {
  USER_ACTION_TYPES,
  CheckUserSession,
  SetCurrentUser,
  GoogleSignInStart,
  EmailSignInStart,
  SignInSuccess,
  SignInFailed,
  SignUpStart,
  SignUpSuccess,
  SignUpFailed,
  SignOutStart,
  SignOutSuccess,
  SignOutFailed,
} from "../types/user.types";
import { UserData, AdditionalInformation } from "../../utils";
import { User } from "firebase/auth";

export const checkUserSession = (): CheckUserSession => {
  return {
    type: USER_ACTION_TYPES.CHECK_USER_SESSION,
  };
};

export const setCurrentUser = (user: UserData): SetCurrentUser => {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
};
export const googleSignInStart = (): GoogleSignInStart => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (
  email: string,
  password: string
): EmailSignInStart => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: {
      email,
      password,
    },
  };
};
export const signInSuccess = (
  user: UserData & { id: string }
): SignInSuccess => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const signInFailed = (error: Error): SignInFailed => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_FAILED,
    payload: error,
  };
};
export const signUpStart = (
  email: string,
  password: string,
  displayName: string
): SignUpStart => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: {
      email,
      password,
      displayName,
    },
  };
};
export const signUpSuccess = (
  user: User,
  additionalDetails: AdditionalInformation
): SignUpSuccess => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: {
      user,
      additionalDetails,
    },
  };
};
export const signUpFailed = (error: Error): SignUpFailed => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_FAILED,
    payload: error,
  };
};
export const signOutStart = (): SignOutStart => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_START,
  };
};
export const signOutSuccess = (): SignOutSuccess => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  };
};
export const signOutFailed = (error: Error): SignOutFailed => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
    payload: error,
  };
};
