export class UserAPI {
  static signIn = (username, password) => {
    const myInit = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ username, password })
    };
    /*
    const request = new Request("http://localhost:5000/signin", {
      method: "POST",
      body: bodyObj,
      headers: new Headers({ "Content-Type": "application/json" })
    });
*/
    debugger;
    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        if (response.ok) debugger;

        return response.json();
      })
      .catch(err => err);
  };

  static signUp = (username, password, fullName) => {
    const request = new Request("http://localhost:5000/signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ username, password, full_name: fullName })
    });

    fetch(request)
      .then(response => response.json())
      .catch(err => err);
  };

  static signOut = () =>
    fetch("http://localhost:5000/signout")
      .then(response => response.json())
      .catch(error => error);
}
