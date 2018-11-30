import { SIGNIN_FAILED } from "../actions/users";
import {
  LOAD_EVENTS_SUCCESS,
  REMOVE_EVENTS,
  LOAD_EVENTS_EMPTY
} from "../actions/events";

import initialState from "../initialState/initialState";

export const user = (state = initialState.user, action) => {
  switch (action.type) {
    case SIGNIN_FAILED:
      return { isSigned: false, hasErrors: action.payload.error };
    case LOAD_EVENTS_SUCCESS:
      return {
        isSigned: true,
        hasErrors: false,
        byIds: action.payload.eventsNorm.entities.users
      };
    case LOAD_EVENTS_EMPTY:
      return {
        isSigned: false,
        hasErrors: false,
        byIds: {}
      };
    case REMOVE_EVENTS:
      return { isSigned: false, hasErrors: false };
    default:
      return state;
  }
};
