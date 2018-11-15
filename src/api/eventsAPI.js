class EventAPI {
  static getEvents = () =>
    fetch("http://localhost:3000/events")
      .then(response => response.json())
      .catch(error => error);

  static createEvent = (name, start, end, userID) => {
    const request = new Request("http://localhost:3000/events", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ event_name: name, start, end, user_id: 1 })
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  };
}

export default EventAPI;
