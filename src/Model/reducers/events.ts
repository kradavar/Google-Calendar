import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  LOAD_EVENTS_SUCCESS,
  REMOVE_EVENTS
} from "../actions/events";
import initialState from "../initialState/initialState";

export const events = (state = initialState.events, action: any) => {
  // ???
  const nextState = state;
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      return { byIds: action.payload.eventsNorm.entities.events };
    case ADD_EVENT:
      debugger;
      return {
        byIds: {
          ...nextState.byIds,
          [action.payload.id]: {
            ...action.payload
          }
        }
      };
      case DELETE_EVENT:
      // DON'T MODIFY STATE
      delete nextState.byIds[action.payload.id];
      return nextState;
    case EDIT_EVENT:
        // DON'T MODIFY STATE
      nextState.byIds[action.payload.id] = { ...action.payload };
      return nextState;
    case REMOVE_EVENTS:
      return {};
    default:
      return state;
  }
};
