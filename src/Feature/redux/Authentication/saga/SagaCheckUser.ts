import { takeLatest, put, call } from "typed-redux-saga";
import { User } from "firebase/auth";

import ActionsCheckUser from "@redux/Authentication/actions/ActionsCheckUser";
import ActionsSignIn from "@redux/Authentication//actions/ActionsSignIn";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  AdditionalInformation,
} from "@utils/Firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    if (userSnapshot) {
      yield* put(
        ActionsSignIn.signInSuccess({
          id: userSnapshot.id,
          ...userSnapshot.data(),
        })
      );
    }
  } catch (error) {
    yield* put(ActionsSignIn.signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(ActionsSignIn.signInFailed(error as Error));
  }
}

function* onCheckUserSession() {
  yield* takeLatest(
    ActionsCheckUser.checkUserSession.type,
    isUserAuthenticated
  );
}

export default {
  onCheckUserSession,
};
