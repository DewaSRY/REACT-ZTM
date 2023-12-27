import ActionsCheckUser from "@redux/Authentication/actions/ActionsCheckUser";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "@redux/store";
export default function useCheckUser() {
  const dispatch = useAppDispatch();

  return bindActionCreators(ActionsCheckUser, dispatch);
}
