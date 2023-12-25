import { takeLatest, put, call } from "typed-redux-saga";
import ActionsSignOut from "@redux/Authentication/actions/ActionsSignOut";
import { signOutUser } from "@utils/Firebase.utils";

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(ActionsSignOut.signOutSuccess());
  } catch (error) {
    yield* put(ActionsSignOut.signOutFailed(error as Error));
  }
}

function* onSignOutStart() {
  yield* takeLatest(ActionsSignOut.signOutStart, signOut);
}

export default {
  onSignOutStart,
};
