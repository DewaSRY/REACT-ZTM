import ActionsCheckUser from "@redux/Authentication/actions/ActionsCheckUser";
import { ActionDispatch } from "@redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export function useCheckUser() {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionsCheckUser, dispatch);
}
