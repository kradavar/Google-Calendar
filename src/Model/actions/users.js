import { UserAPI } from "../../api/userAPI";
import { loadEventsSuccess } from "../actions/events";

export const SIGN_IN = "SIGN_IN";
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
      if (result.status > 400) {
        debugger;
        return dispatch({
          type: "SIGNIN_FAILED",
          error: "Wrong username or password"
        });
      } else dispatch(loadEventsSuccess(result));
    })
    .catch(error => {
      debugger;
      return new Error(error.statusText);
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
