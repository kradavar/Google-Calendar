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
      dispatch(loadEventsSuccess(result));
    })
    .catch(error => {
      throw error;
    });

export const signUp = (username, password, fullName) => dispatch =>
  UserAPI.signUp(username, password, fullName)
    .then(result => {
      dispatch(loadEventsSuccess(result));
    })
    .catch(error => {
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
