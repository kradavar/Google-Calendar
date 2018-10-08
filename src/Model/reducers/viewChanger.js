import { SET_VIEW } from '../actions/tableActionTypes';

const viewChanger = (state = 'month', action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.viewType;
    default:
      return state;
  }
}

export default viewChanger;