import { combineReducers } from "redux";
import { events } from "./events";
import { users } from "./users";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  events,
  users,
  form: formReducer
});
