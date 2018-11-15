import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  LOAD_EVENTS_SUCCESS
} from "../actions/actions";
import initialState from "../initialState/initialState";

let nextEventId = 1;
export const events = (state = initialState.events, action) => {
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      console.log(action.payload);
      debugger;
      return action.payload.events;
    case ADD_EVENT:
      return [
        ...state,
        {
          id: nextEventId++,
          ...action.payload
        }
      ];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.payload.id);
    case EDIT_EVENT:
      return state.map(event =>
        event.id === action.payload.id ? { ...action.payload } : event
      );
    default:
      return state;
  }
};
