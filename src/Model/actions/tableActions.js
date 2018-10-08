import {
  GO_NEXT_MONTH,
  GO_NEXT_WEEK,
  GO_NEXT_DAY,
  GO_PREVIOUS_MONTH,
  GO_PREVIOUS_WEEK,
  GO_PREVIOUS_DAY,
  SET_VIEW
} from "./tableActionTypes";

export const go_next_month = monthId => ({
  type: GO_NEXT_MONTH,
  payload: {
    monthId
  }
});

export const go_next_week = weekId => ({
  type: GO_NEXT_WEEK,
  payload: {
    weekId
  }
});

export const go_next_day = dayId => ({
  type: GO_NEXT_DAY,
  payload: {
    dayId
  }
});

export const go_previous_month = monthId => ({
  type: GO_PREVIOUS_MONTH,
  payload: {
    monthId
  }
});

export const go_previous_week = weekId => ({
  type: GO_PREVIOUS_WEEK,
  payload: {
    weekId
  }
});

export const go_previous_day = dayId => ({
  type: GO_PREVIOUS_DAY,
  payload: {
    dayId
  }
});

export const set_view = viewType => ({
  type: SET_VIEW,
  viewType
});
