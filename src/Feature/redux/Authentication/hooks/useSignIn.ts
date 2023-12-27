import ActionsSignIn from "@redux/Authentication/actions/ActionsSignIn";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "@redux/store";
export default function useSignIn() {
  const dispatch = useAppDispatch();

  return bindActionCreators(ActionsSignIn, dispatch);
}
