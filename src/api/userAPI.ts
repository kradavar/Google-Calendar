import { USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP } from "./enpoints";
import { makeRequest } from "./requestWrapper";
import { IUserType } from "src/Model/actions/users";
export class UserAPI {
  static signIn = (user: IUserType) => {
    const request = new Request(USER_SIGN_IN, {
      method: "POST",
      body: JSON.stringify({
        username: user.username,
        password: user.password
      }),
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return makeRequest(request);
  };

  static signUp = (user: IUserType) => {
    const request = new Request(USER_SIGN_UP, {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        full_name: user.fullName
      })
    });
    return makeRequest(request);
  };

  static signOut = () => makeRequest(USER_SIGN_OUT);
}
