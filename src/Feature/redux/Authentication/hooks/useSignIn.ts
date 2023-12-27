import ActionsSignIn from "@redux/Authentication/actions/ActionsSignIn";
import { bindActionCreators } from "@reduxjs/toolkit";
import { dispatch } from "@redux/store";
export default function useSignIn() {
  return bindActionCreators(ActionsSignIn, dispatch);
}
