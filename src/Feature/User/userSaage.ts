import { takeLatest, put, all, call } from "typed-redux-saga";
import { User } from "firebase/auth";

import { userAction } from "./userSlice";
const {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  emailSignInStart,
  signUpStart,
  signOutStart,
  googleSignInStart,
  checkUserSession,
} = userAction;
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from "../../utils";

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
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
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
    yield* put(signInFailed(error as Error));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({ payload: { displayName, email, password } }) {
  console.log("hite", email, password, displayName);
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log(userCredential);
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}
export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}
function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

function* onGoogleSignInStart() {
  yield* takeLatest(googleSignInStart.type, signInWithGoogle);
}
function* onCheckUserSession() {
  yield* takeLatest(checkUserSession.type, isUserAuthenticated);
}
function* onEmailSignInStart() {
  yield* takeLatest(emailSignInStart, signInWithEmail);
}
function* onSignUpStart() {
  yield* takeLatest(signUpStart, signUp);
}

function* onSignUpSuccess() {
  yield* takeLatest(signUpSuccess, signInAfterSignUp);
}
function* onSignOutStart() {
  yield* takeLatest(signOutStart, signOut);
}

export function* userSagas() {
  yield* all([
    call(onGoogleSignInStart),
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
