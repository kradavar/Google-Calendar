// Add base wrapper where will be logic like
// return fetch(request)
//     .then(response => response.json())
//     .catch(error => error);

export class EventAPI {
  static getEvents = () =>
    fetch("http://localhost:5000/events")
      .then((result: any) => {
        if (result.hasErrors) {
          return Promise.reject(result.json());
        } else return result.json();
      })
      .catch((err: any) => err);

  // TODO start, end => event: EventType
  static createEvent = (name: string, start: string, end: string) => {
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

    // TODO id, name, start, end => event: EventType
    static editEvent = (id: number, name: string, start: string, end: string) => {
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

  static deleteEvent = (id: number) => {
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
