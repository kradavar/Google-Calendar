import { ADD_EVENT, DELETE_EVENT } from "../actions/actions";
import moment from "moment";

const initialState = {
  events: [],
  renderedDate: moment()
};

export const events = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        {
          start: action.start,
          end: action.end,
          name: action.name
        }
      ];
    case DELETE_EVENT:
      return state.events.filter(event => event.name != action.name);
    default:
      return state;
  }
};
