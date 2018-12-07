import { SIGNIN_FAILED } from "../actions/users";
import { STORE_EVENTS, REMOVE_EVENTS } from "../actions/events";

import { initialState } from "../initialState/initialState";

export const user = (state = initialState.user, action) => {
  switch (action.type) {
    case SIGNIN_FAILED:
      return { isSigned: false, hasErrors: action.payload.error };
    case STORE_EVENTS:
      return {
        isSigned: true,
        hasErrors: false
      };
    case REMOVE_EVENTS:
      return { isSigned: false, hasErrors: false };
    default:
      return state;
  }
};
