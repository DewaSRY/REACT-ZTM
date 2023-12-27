import ActionsSignOut from "@redux/Authentication/actions/ActionsSignOut";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "@redux/store";
export default function useSignOut() {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionsSignOut, dispatch);
}
