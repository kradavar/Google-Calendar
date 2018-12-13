import * as UserAPI from "../api/userAPI";
import { removeEvents, storeEvents } from "./events";

export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGN_OUT = "SIGN_OUT";

export interface IUserType {
  username: string;
  password: string;
  fullName?: string;
}
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
    .catch(error => {
      throw error;
    });

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
