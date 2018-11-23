export class EventAPI {
  static createEvent = (name, start, end) => {
    const request = new Request("http://localhost:5000/events", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
      body: JSON.stringify({ event_name: name, start, end })
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  };

  static editEvent = (id, name, start, end) => {
    const request = new Request("http://localhost:5000/events/" + id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
      body: JSON.stringify({ event_name: name, start, end })
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  };

  static deleteEvent = id => {
    const request = new Request("http://localhost:5000/events/" + id, {
      method: "DELETE",
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => error);
  };
}
