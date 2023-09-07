/* eslint-disable react-hooks/exhaustive-deps */
// import { useCallback } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState, UserAction } from "../state";
export function useUser() {
  const typeSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();
  const currentUser = typeSelector((s) => s.user.currentUser);
  const { googleSignInStart, emailSignInStart, signUpStart } =
    bindActionCreators(UserAction, dispatch);
  // const setCurrentUsers = useCallback((user) => {
  //   setCurrentUser(user);
  // }, []);
  const signInWithGoogle = async () => googleSignInStart();

  const signInStartWitheEmail = (email: string, password: string) => {
    emailSignInStart(email, password);
  };
  const createSingUpStart = (
    email: string,
    password: string,
    displayName: string
  ) => {
    signUpStart(email, password, displayName);
  };
  return {
    // setCurrentUsers,
    currentUser,
    signInWithGoogle,
    signInStartWitheEmail,
    createSingUpStart,
  };
}
