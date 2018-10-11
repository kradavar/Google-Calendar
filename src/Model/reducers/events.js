import { ADD_EVENT, DELETE_EVENT } from "../actions/actions";
import moment from "moment";

let nextEventId = 0;
const initialState = [
  {
    name: "Create redux event",
    start: moment(),
    end: moment().add(1, "day")
  }
];
export const events = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        {
          id: nextEventId++,
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
