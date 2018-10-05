export const GO_NEXT_MONTH = 'GO_NEXT_MONTH'
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK'
export const GO_NEXT_DAY = 'GO_NEXT_DAY'
export const GO_PREVIOUS_MONTH = 'GO_PREVIOUS_MONTH'
export const GO_PREVIOUS_WEEK = 'GO_PREVIOUS_WEEK'
export const GO_PREVIOUS_DAY = 'GO_PREVIOUS_DAY'
export const SET_VIEW = 'SET_VIEW'

export const go_next_month = (monthId) => ({
  type: GO_NEXT_MONTH,
  monthId
})

export const go_next_week = (weekId) => ({
  type: GO_NEXT_WEEK,
  weekId
})

export const go_next_day = (dayId) => ({
  type: GO_NEXT_DAY,
  dayId
})

export const go_previous_month = (monthId) => ({
  type: GO_PREVIOUS_MONTH,
  monthId
})

export const go_previous_week = (weekId) => ({
  type: GO_PREVIOUS_WEEK,
  weekId
})

export const go_previous_day = (dayId) => ({
  type: GO_PREVIOUS,
  dayId
})

export const set_view = (viewType) => ({
  type: SET_VIEW,
  viewType
})