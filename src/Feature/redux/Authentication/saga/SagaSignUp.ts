import { takeLatest, put, call } from "typed-redux-saga";
import actionsSignUP from "@redux/Authentication/actions/ActionsSignUp";
import { createAuthUserWithEmailAndPassword } from "@utils/Firebase.utils";
import { getSnapshotFromUserAuth } from "./SagaCheckUser";

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* put(actionsSignUP.signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(actionsSignUP.signUpFailed(error as Error));
  }
}

function* onSignUpStart() {
  yield* takeLatest(actionsSignUP.signUpStart, signUp);
}

function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}
function* onSignUpSuccess() {
  yield* takeLatest(actionsSignUP.signUpSuccess, signInAfterSignUp);
}
export default {
  onSignUpStart,
  onSignUpSuccess,
};
