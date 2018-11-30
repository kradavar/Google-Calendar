import { UserAPI } from "../../api/userAPI";
import { loadEventsSuccess, removeEvents } from "./events";

export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGN_OUT = "SIGN_OUT";


// TODO username, password, ... => event: UserType
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


// TODO username, password, ... => event: UserType
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

export const signOut = () => (dispatch: Function) =>
  UserAPI.signOut()
    .then(result => {
      if (result.signOutDone) {
        dispatch(removeEvents());
      }
    })
    .catch(error => {
      throw error;
    });
