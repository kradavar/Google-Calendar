export class UserAPI {
  static signIn = (username, password) => {
    const request = new Request("http://localhost:5000/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => response.json())
      .catch(err => err);
  };

  static signUp = (username, password, fullName) => {
    console.log("into userAPI signUp");
    console.log("values ", username, password, fullName);
    const request = new Request("http://localhost:5000/signup", {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ username, password, full_name: fullName })
    });
    console.log("after creating request");
    console.log(request);
    console.log("request body", request.body);
    return fetch(request)
      .then(response => response.json())
      .catch(err => err);
  };

  static signOut = () =>
    fetch("http://localhost:5000/signout")
      .then(response => response.json())
      .catch(error => error);
}
