import { takeLatest, put, call } from "typed-redux-saga";
import { User } from "firebase/auth";

import actionsSignIn from "@redux/Authentication/actions/ActionsSignIn";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  AdditionalInformation,
} from "@utils/Firebase.utils";

function* getSnapshotFromUserAuth(
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
        actionsSignIn.signInSuccess({
          id: userSnapshot.id,
          ...userSnapshot.data(),
        })
      );
    }
  } catch (error) {
    yield* put(actionsSignIn.signInFailed(error as Error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(actionsSignIn.signInFailed(error as Error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(actionsSignIn.signInFailed(error as Error));
  }
}

function* onGoogleSignInStart() {
  yield* takeLatest(actionsSignIn.googleSignInStart.type, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield* takeLatest(actionsSignIn.emailSignInStart, signInWithEmail);
}

export default {
  onGoogleSignInStart,
  onEmailSignInStart,
};
