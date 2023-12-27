import ActionsSignUp from "@redux/Authentication/actions/ActionsSignUp";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "@redux/store";
export default function useSignUp() {
  const dispatch = useAppDispatch();

  return bindActionCreators(ActionsSignUp, dispatch);
}
