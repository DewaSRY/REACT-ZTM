import { all, call } from "typed-redux-saga";
import SagaSignIn from "./SagaSignIn";
import SagaCheckUser from "./SagaCheckUser";
import SagaSignUp from "./SagaSignUp";
import SagaSignOut from "./SagaSignout";
export default function* userSagas() {
  yield* all([
    call(SagaSignIn.onGoogleSignInStart),
    call(SagaSignIn.onEmailSignInStart),
    call(SagaCheckUser.onCheckUserSession),
    call(SagaSignUp.onSignUpStart),
    call(SagaSignUp.onSignUpSuccess),
    call(SagaSignOut.onSignOutStart),
  ]);
}
