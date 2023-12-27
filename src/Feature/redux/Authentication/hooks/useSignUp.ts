import ActionsSignUp from "@redux/Authentication/actions/ActionsSignUp";
import { bindActionCreators } from "@reduxjs/toolkit";
import { dispatch } from "@redux/store";
export default function useSignUp() {
  return bindActionCreators(ActionsSignUp, dispatch);
}
