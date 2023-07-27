import { createContext, useEffect, useReducer, PropsWithChildren } from "react";
import { User } from "firebase/auth";
import { Action, UserType } from "../store-type/User.Type";
import {
  logInWithGoogle,
  logInWithEmail,
  registerUser,
} from "../action-context/User.action";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/Firebase.utils";
interface IUserContext {
  currentUser: null | User;
  googleLogin: () => void;
  emailLogin: (email: string, password: string) => void;
  createUser: (name: string, email: string, password: string) => void;
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  googleLogin: () => {},
  emailLogin: () => {},
  createUser: () => {},
});

const userReducer = (state: IUserContext, action: Action) => {
  const { type } = action;
  switch (type) {
    case UserType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`un handel type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
  googleLogin: () => {},
  emailLogin: () => {},
  createUser: () => {},
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
  const googleLogin = () => logInWithGoogle();
  const emailLogin = (email: string, password: string) =>
    logInWithEmail(email, password);
  const createUser = (name: string, email: string, password: string) =>
    registerUser(name, email, password);
  const value = {
    currentUser,
    googleLogin,
    emailLogin,
    createUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
