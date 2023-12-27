import ActionsCheckUser from "@redux/Authentication/actions/ActionsCheckUser";
import { bindActionCreators } from "@reduxjs/toolkit";
import { dispatch } from "@redux/store";
export default function useCheckUser() {
  return bindActionCreators(ActionsCheckUser, dispatch);
}
