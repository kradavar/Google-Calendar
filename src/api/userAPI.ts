import { USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP } from "./enpoints";
import { makeRequest } from "./requestWrapper";
import { IUserType } from "../actions/users";

export const signIn = (user: IUserType) =>
  makeRequest(
    USER_SIGN_IN,
    "POST",
    JSON.stringify({
      username: user.username,
      password: user.password
    })
  );

export const signUp = (user: IUserType) =>
  makeRequest(
    USER_SIGN_UP,
    "POST",
    JSON.stringify({
      username: user.username,
      password: user.password,
      full_name: user.fullName
    })
  );

export const signOut = () => makeRequest(USER_SIGN_OUT, "GET");
