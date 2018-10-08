import { combineReducers } from "redux";
import tableReducers from '../reducers/tableReducers';
import viewChanger from "../reducers/viewChanger";

export default combineReducers({
  tableReducers,
  viewChanger
});
