import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  LOAD_EVENTS_SUCCESS,
  REMOVE_EVENTS
} from "../actions/events";
import initialState from "../initialState/initialState";

export const events = (state = initialState.events, action: any) => {
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      return Object.assign({}, state, { byIds: action.payload.events });
    case ADD_EVENT:
      return Object.assign({}, state, {
        byIds: {
          [action.payload.id]: action.payload
        }
      });
    case DELETE_EVENT:
      // DON'T MODIFY STATE
      const nextState = Object.assign({}, state);
      delete nextState.byIds[action.payload.id];
      return nextState;
    case EDIT_EVENT:
      return Object.assign({}, state, {
        byIds: {
          [action.payload.id]: action.payload
        }
      });
    case REMOVE_EVENTS:
      return {};
    default:
      return state;
  }
};
