import ActionsSignOut from "@redux/Authentication/actions/ActionsSignOut";
import { bindActionCreators } from "@reduxjs/toolkit";
import { dispatch } from "@redux/store";
export default function useSignOut() {
  return bindActionCreators(ActionsSignOut, dispatch);
}
