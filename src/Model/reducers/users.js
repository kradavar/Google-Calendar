import { SIGNIN_FAILED, SIGNUP_FAILED } from "../actions/users";

import initialState from "../initialState/initialState";

export const users = (state = initialState, action) =>
  action.type === SIGNIN_FAILED
    ? { user: false, error: action.payload.error }
    : { ...state, user: true };
