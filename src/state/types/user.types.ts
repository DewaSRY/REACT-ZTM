import { UserData, AdditionalInformation } from "../../utils";
import { User } from "firebase/auth";

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START = "user/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "user/EMAIL_SIGN_IN_START",

  SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "user/SIGN_IN_FAILED",

  SIGN_UP_START = "user/SIGN_UP_START",
  SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS",
  SIGN_UP_FAILED = "user/SIGN_UP_FAILED",

  SIGN_OUT_START = "user/SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED",
}
export type CheckUserSession = {
  type: USER_ACTION_TYPES.CHECK_USER_SESSION;
};
export type SetCurrentUser = {
  type: USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: UserData;
};
export type GoogleSignInStart = {
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START;
};
export type SignUpStart = {
  type: USER_ACTION_TYPES.SIGN_UP_START;
  payload: { email: string; password: string; displayName: string };
};
export type EmailSignInStart = {
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START;
  payload: { email: string; password: string };
};
export type SignInSuccess = {
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS;
  payload: UserData;
};
export type SignInFailed = {
  type: USER_ACTION_TYPES.SIGN_IN_FAILED;
  payload: Error;
};
export type SignUpSuccess = {
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS;
  payload: { user: User; additionalDetails: AdditionalInformation };
};
export type SignUpFailed = {
  type: USER_ACTION_TYPES.SIGN_UP_FAILED;
  payload: Error;
};
export type SignOutStart = {
  type: USER_ACTION_TYPES.SIGN_OUT_START;
};
export type SignOutSuccess = {
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS;
};
export type SignOutFailed = {
  type: USER_ACTION_TYPES.SIGN_OUT_FAILED;
  payload: Error;
};
export type UserActionType =
  | SignOutFailed
  | SignOutSuccess
  | SignOutStart
  | SignUpFailed
  | SignUpSuccess
  | SignInFailed
  | SignInSuccess
  | EmailSignInStart
  | GoogleSignInStart
  | SignUpStart
  | SetCurrentUser
  | CheckUserSession;
