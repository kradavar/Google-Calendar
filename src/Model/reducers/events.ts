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
      return { byIds: action.payload.eventsNorm.entities.events };
    case ADD_EVENT:
      return {
        ...state,

        ...action.payload
      };
    case DELETE_EVENT:
    //return state.filter((event: any) => event.id !== action.payload.id);
    case EDIT_EVENT:
    //return state.map((event: any) =>
    //   event.id === action.payload.id ? { ...action.payload } : event
    // );
    case REMOVE_EVENTS:
      return {};
    default:
      return state;
  }
};
