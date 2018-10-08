import { GO_NEXT_MONTH, GO_NEXT_WEEK, GO_NEXT_DAY, GO_PREVIOUS_MONTH, GO_PREVIOUS_WEEK, GO_PREVIOUS_DAY, SET_VIEW } from '../actions/tableActionTypes';
/*const calendarView = (state, action) => {
  if (action.type === SET_VIEW) {
    return {
      ...state,
      view: action.viewType
    };
  } else {
    return state;
  }
}*/

const tableReducers = (state, action) => {
  let newDate;
  switch (action.type) {
    case GO_NEXT_MONTH: newDate = state.date.add(1, 'month');
      break;
    case GO_NEXT_WEEK: newDate = state.date.add(1, 'week');
      break;
    case GO_NEXT_DAY: newDate = state.date.add(1, 'day');
      break;
    case GO_PREVIOUS_MONTH: newDate = state.date.subtract(1, 'month');
      break;
    case GO_PREVIOUS_WEEK: newDate = state.date.subtract(1, 'week');
      break;
    case GO_PREVIOUS_DAY: newDate = state.date.subtract(1, 'day');
      break;
  }

  return {
    ...state,
    date: newDate
  };
}

export default tableReducers;