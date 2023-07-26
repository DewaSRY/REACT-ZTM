import { createContext, useEffect, useReducer, PropsWithChildren } from "react";
import { User } from "firebase/auth";
import { Action, UserType } from "./User.Type";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/Firebase.utils";
interface IUserContex {
  currentUser: null | User;
}

export const UserContext = createContext<IUserContex>({
  currentUser: null,
  // setCurrentUser: () => {},
});

const userReducer = (state: IUserContex, action: Action) => {
  const { type } = action;
  switch (type) {
    case UserType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`unheandel type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user: User | null) => {
    dispatch({
      type: UserType.SET_CURRENT_USER,
      payload: user,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        setCurrentUser(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
