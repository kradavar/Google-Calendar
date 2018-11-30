import { USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP } from "./enpoints";
import { makeRequest } from "./requestWrapper";
export class UserAPI {
  static signIn = (username: string, password: string) => {
    const request = new Request(USER_SIGN_IN, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return makeRequest(request);
  };

  static signUp = (username: string, password: string, fullName: string) => {
    const request = new Request(USER_SIGN_UP, {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ username, password, full_name: fullName })
    });
    return makeRequest(request);
  };

  static signOut = () => makeRequest(USER_SIGN_OUT);
}
