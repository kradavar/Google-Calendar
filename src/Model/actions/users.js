import { UserAPI } from "../../api/userAPI";
import { SubmissionError } from "redux-form";
import { loadEventsSuccess } from "../actions/events";

export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

const signOutSuccess = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  };
};

export const signIn = (username, password) => dispatch =>
  UserAPI.signIn(username, password)
    .then(result => {
      debugger;
      if (Number.isInteger(result.length)) {
        dispatch(loadEventsSuccess(result));
      } else {
        throw result;
      }
    })
    .catch(error => {
      throw error;
    });

export const signUp = (username, password, fullName) => dispatch =>
  UserAPI.signUp(username, password, fullName)
    .then(result => {
      console.log(result);
      debugger;
      if (result.status > 400) {
        throw new Error();
      } else dispatch(loadEventsSuccess(result));
    })
    .catch(error => {
      debugger;
      console.log("user error", error);
      throw error;
    });

export const signOut = () => dispatch =>
  UserAPI.signOut()
    .then(result => {
      dispatch(signOutSuccess());
    })
    .catch(error => {
      throw error;
    });
