import { STORE_EVENTS, REMOVE_EVENTS } from "../actions/events";
import initialState from "../initialState/initialState";

export const events = (state = initialState.events, action: any) => {
  switch (action.type) {
    case STORE_EVENTS:
      return { byIds: action.payload.events };
    case REMOVE_EVENTS:
      return { ...state, byIds: {} };
    default:
      return state;
  }
};
