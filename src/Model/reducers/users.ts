import { SIGNIN_FAILED } from "../actions/users";
import { STORE_EVENTS, REMOVE_EVENTS, IS_FETCHING } from "../actions/events";

import { initialState } from "../initialState/initialState";

export const user = (
  state = initialState.user,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        meta: {
          loading: true
        }
      };
    case SIGNIN_FAILED:
      return {
        isSigned: false,
        hasErrors: action.payload.error,
        meta: {
          loading: false
        }
      };
    case STORE_EVENTS:
      return {
        isSigned: true,
        hasErrors: false,
        meta: {
          loading: false
        }
      };
    case REMOVE_EVENTS:
      return {
        isSigned: false,
        hasErrors: false,
        meta: {
          loading: false
        }
      };
    default:
      return state;
  }
};
