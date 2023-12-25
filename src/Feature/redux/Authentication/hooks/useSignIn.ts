import ActionsSignIn from "@redux/Authentication/actions/ActionsSignIn";
import { ActionDispatch } from "@redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export function useSignIn() {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionsSignIn, dispatch);
}
