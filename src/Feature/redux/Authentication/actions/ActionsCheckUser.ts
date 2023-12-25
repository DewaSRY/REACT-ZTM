import { createAction } from "@reduxjs/toolkit";

const checkUserSession = createAction(`users/checkUserSession`);

export default {
  checkUserSession,
};
