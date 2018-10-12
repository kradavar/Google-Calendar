import { ADD_EVENT, DELETE_EVENT } from "../actions/actions";
import moment from "moment";

let nextEventId = 0;
const initialState = [
  {
    name: "Test 1",
    start: "2018-10-12 10:50",
    end: "2018-10-12 11-50"
  },
  {
    name: "Test 2",
    start: "2018-10-12 15:20",
    end: "2018-10-12 16:30"
  },
  {
    name: "Test 3",
    start: "2018-11-15 09:00",
    end: "2018-11-15 11:00"
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
