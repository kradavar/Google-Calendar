import { combineReducers } from "redux";
import { events } from "./events";
import { user } from "./users";
import { error } from "./error";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  events,
  user,
  error,
  form: formReducer
});
