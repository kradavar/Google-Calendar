import { makeRequest } from "./requestWrapper";
import { EVENTS } from "./enpoints";
export class EventAPI {
  // TODO start, end => event: EventType
  static createEvent = (name: string, start: string, end: string) => {
    const request = new Request(EVENTS, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
      body: JSON.stringify({ event_name: name, start, end })
    });
    return makeRequest(request);
  };

  // TODO id, name, start, end => event: EventType
  static editEvent = (id: number, name: string, start: string, end: string) => {
    const request = new Request(EVENTS + "/" + id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
      body: JSON.stringify({ event_name: name, start, end })
    });

    return makeRequest(request);
  };

  static deleteEvent = (id: number) => {
    const request = new Request(EVENTS + "/" + id, {
      method: "DELETE",
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return makeRequest(request);
  };
}
