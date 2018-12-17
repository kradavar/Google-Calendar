import { STORE_EVENTS, REMOVE_EVENTS, IS_FETCHING } from "../actions/events";
import { initialState } from "../initialState/initialState";

export const events = (
  state = initialState.events,
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
    case STORE_EVENTS:
      return {
        byIds: { ...state.byIds, ...action.payload.events },
        byUsers: { ...state.byUsers, ...action.payload.eventsByUsers },
        meta: {
          loading: false
        }
      };
    case REMOVE_EVENTS:
      return {
        byIds: {},
        byUsers: {},
        meta: {
          loading: false
        }
      };
    default:
      return state;
  }
};
