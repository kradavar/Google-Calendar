import * as UserAPI from "../api/userAPI";
import { removeEvents, storeEvents } from "./events";
import { SubmissionError } from "redux-form";

export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGN_OUT = "SIGN_OUT";
export const SERVER_ERROR = "SERVER_ERROR";

export interface IUserType {
  username: string;
  password: string;
  fullName?: string;
}

const errorHandler = (error, dispatch) => {
  if (error.hasErrors) {
    return Promise.reject(
      new SubmissionError({
        [error.field]: error.message,
        _error: "Sign was failed"
      })
    );
  } else {
    dispatch({
      type: SERVER_ERROR,
      payload: { hasServerError: true, message: "Server is nor aviable" }
    });
    return Promise.reject();
  }
};

export const signIn = (user: IUserType) => (dispatch: Function) =>
  UserAPI.signIn(user)
    .then(result => {
      if (result.hasErrors) {
        dispatch({ type: SIGNIN_FAILED, payload: { error: { result } } });
        return Promise.reject(result);
      } else {
        return dispatch(storeEvents());
      }
    })
    .catch(error => errorHandler(error, dispatch));

export const signUp = (user: IUserType) => (dispatch: Function) =>
  UserAPI.signUp(user)
    .then(result => {
      if (result.hasErrors) {
        dispatch({
          type: SIGNUP_FAILED,
          payload: { error: { result } }
        });
        return Promise.reject(result);
      } else {
        return dispatch(storeEvents());
      }
    })
    .catch(error => errorHandler(error, dispatch));

export const signOut = () => (dispatch: Function) =>
  UserAPI.signOut()
    .then(result => {
      if (result.signOutDone) {
        dispatch(removeEvents());
      }
    })
    .catch(error => errorHandler(error, dispatch));
