import { UserAPI } from "../../api/userAPI";
import { loadEventsSuccess } from "./events";

export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGN_OUT = "SIGN_OUT";

const signOutSuccess = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  };
};

export const signIn = (username: string, password: string) => (
  dispatch: Function
) =>
  UserAPI.signIn(username, password)
    .then(result => {
      if (result.hasErrors) {
        dispatch({ type: SIGNIN_FAILED, payload: { error: { result } } });
        return Promise.reject(result);
      } else {
        return dispatch(loadEventsSuccess(result));
      }
    })
    .catch(error => {
      throw error;
    });

export const signUp = (
  username: string,
  password: string,
  fullName: string
) => (dispatch: Function) =>
  UserAPI.signUp(username, password, fullName)
    .then(result => {
      if (result.hasErrors) {
        dispatch({
          type: SIGNUP_FAILED,
          payload: { error: { result } }
        });
        return Promise.reject(result);
      } else {
        return dispatch(loadEventsSuccess(result));
      }
    })
    .catch(error => {
      throw error;
    });
/*
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
*/
export const signOut = () => (dispatch: Function) =>
  UserAPI.signOut()
    .then(result => {
      dispatch(signOutSuccess());
    })
    .catch(error => {
      throw error;
    });
