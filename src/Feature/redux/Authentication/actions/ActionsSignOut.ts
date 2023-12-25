import { createAction } from "@reduxjs/toolkit";
import sliceAut from "@redux/Authentication/SliceAuthentication";

const signOutStart = createAction(`${sliceAut.name}/signOutStart`);
const signOutSuccess = createAction(`${sliceAut.name}/signOutSuccess`);
const signOutFailed = createAction(
  `${sliceAut.name}/signOutFailed`,
  (error: Error) => ({
    payload: error,
  })
);

export default { signOutFailed, signOutSuccess, signOutStart };
