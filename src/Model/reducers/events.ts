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
      return { byIds: action.payload.events };
    case ADD_EVENT:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload
        }
      };
    case DELETE_EVENT:
      return {
        ...state,
        byIds: { ...state.byIds, [action.payload.id]: undefined }
      };
    case EDIT_EVENT:
      return {
        ...state,
        byIds: { ...state.byIds, [action.payload.id]: action.payload }
      };
    case REMOVE_EVENTS:
      return action.payload;
    default:
      return state;
  }
};
