import ActionsSignOut from "@redux/Authentication/actions/ActionsSignOut";
import { ActionDispatch } from "@redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export default function useSignOut() {
  const useAppDispatch: () => ActionDispatch = useDispatch;
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionsSignOut, dispatch);
}
