import { UserAPI } from "../../api/userAPI";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

const signInSuccess = user => {
  return {
    type: SIGN_IN,
    payload: {
      ...user
    }
  };
};

const signUpSuccess = user => {
  return {
    type: SIGN_UP,
    payload: {
      ...user
    }
  };
};

const signOutSuccess = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  };
};

export const signIn = (username, password) => dispatch =>
  UserAPI.signIn(username, password)
    .then(result => {
      dispatch(signInSuccess({ id: result.insertId, username, password }));
    })
    .catch(error => {
      throw error;
    });

export const signUp = (username, password, fullName) => dispatch =>
  UserAPI.signUp(username, password, fullName)
    .then(result => {
      dispatch(signUpSuccess({ username, password, fullName }));
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
