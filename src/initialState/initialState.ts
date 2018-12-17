export const initialState = {
  events: {
    meta: {
      loading: false
    },
    byIds: {},
    byUsers: {}
  },
  user: {
    meta: {
      loading: false
    },
    isSigned: false,
    hasErrors: false
  }
};
