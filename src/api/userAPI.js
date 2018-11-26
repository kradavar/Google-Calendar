export class UserAPI {
  static signIn = (username, password) => {
    const request = new Request("http://localhost:5000/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response =>
        response.ok ? response.json() : Promise.reject(response.json())
      )
      .catch(err => err);
  };

  static signUp = (username, password, fullName) => {
    const request = new Request("http://localhost:5000/signup", {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ username, password, full_name: fullName })
    });
    return fetch(request)
      .then(response => response.json())
      .catch(err => err);
  };

  static signOut = () =>
    fetch("http://localhost:5000/signout")
      .then(response => response.json())
      .catch(error => error);
}
