class EventAPI {
  static getEvents = () =>
    fetch("http://localhost:5000/events")
      .then(response => response.json())
      .catch(error => error);

  static createEvent = (name, start, end, userID) => {
    const request = new Request("http://localhost:5000/events", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ event_name: name, start, end, user_id: 1 })
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  };

  static editEvent = (id, name, start, end, userID) => {
    console.log("eventAPI put: ", id, name, start, end, userID);
    debugger;
    const request = new Request("http://localhost:5000/events/:" + id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ event_name: name, start, end, user_id: 1 })
    });

    console.log("request.body:  ", request.body);

    return fetch(request)
      .then(response => {
        console.log("server response", response.json());
        return response.json();
      })
      .catch(error => error);
  };
}

export default EventAPI;
