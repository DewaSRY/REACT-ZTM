import { useContext } from "react";
import { UserContext } from "../Store";
export function useUser() {
  return useContext(UserContext);
}
