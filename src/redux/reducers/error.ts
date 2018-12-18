import { initialState } from "../initialState/initialState";
import { SERVER_ERROR } from "../actions/users";

export const error = (state = initialState.error, action) => {
  if (action.type === SERVER_ERROR) {
    const { hasServerError, message } = action.payload;
    return { ...state, hasServerError, message };
  } else return state;
};
