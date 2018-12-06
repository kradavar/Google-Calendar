import { STORE_EVENTS, REMOVE_EVENTS, IS_FETCHING } from "../actions/events";
import initialState from "../initialState/initialState";

export const events = (state = initialState.events, action: any) => {
  switch (action.type) {
    case STORE_EVENTS:
      return { loading: false, byIds: action.payload.events };
    case REMOVE_EVENTS:
      return { ...state, loading: false, byIds: {} };
    case IS_FETCHING:
      return { loading: true, byIds: {} };
    default:
      return state;
  }
};
