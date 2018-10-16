import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from "../actions/actions";

let nextEventId = 0;
const initialState = [
  {
    id: nextEventId++,
    name: "Test 1",
    start: "2018-10-12 10:50",
    end: "2018-10-12 11:50"
  },
  {
    id: nextEventId++,
    name: "Test 2",
    start: "2018-10-12 15:20",
    end: "2018-10-12 16:30"
  },
  {
    id: nextEventId++,
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
      return state.filter(event => event.id !== action.id);
    case EDIT_EVENT:
      return state.map(event => {
        if (event.id === action.id) {
          event.start = action.start;
          event.end = action.end;
          event.name = action.name;

          return event;
        } else {
          return event;
        }
      });
    default:
      return state;
  }
};
