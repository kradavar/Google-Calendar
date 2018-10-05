import { GO_NEXT_MONTH, GO_NEXT_WEEK, GO_NEXT_DAY, GO_PREVIOUS_MONTH, GO_PREVIOUS_WEEK, GO_PREVIOUS_DAY, SET_VIEW } from '..actions/tableActions';
import moment from 'moment';

const calendarView = (state, action) => {
  if (action.type === SET_VIEW) {
    return {
      ...state,
      view: action.viewType
    };
  } else {
    return state;
  }
}

const changeDate = (state, action) => {
  switch (action.type) {
    case 'GO_NEXT_MONTH': state.date = state.date.add(1, 'month');
      break;
    case 'GO_NEXT_WEEK': state.date = state.date.add(1, "week");
      break;
    case 'GO_NEXT_DAY': state.date = state.date.add(1, day);
      break;

  }
}