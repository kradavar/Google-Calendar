import { combineReducers } from "redux";
import events from "./events";

export default (todoApp = combineReducers({
  events
}));
