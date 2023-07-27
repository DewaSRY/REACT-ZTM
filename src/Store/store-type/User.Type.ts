import { User } from "firebase/auth";
export enum UserType {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}
export interface Action {
  type: UserType.SET_CURRENT_USER;
  payload: User | null;
}
