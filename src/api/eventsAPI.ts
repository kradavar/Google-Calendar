import { IEvent } from "./../Model/actions/events";
import { makeRequest } from "./requestWrapper";
import { EVENTS } from "./enpoints";
export class EventAPI {
  static getEvents = () => {
    const request = new Request(EVENTS, {
      method: "GET",
      credentials: "include"
    });

    return makeRequest(request);
  };

  static createEvent = (event: IEvent) => {
    const request = new Request(EVENTS, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
      body: JSON.stringify(event)
    });
    return makeRequest(request);
  };

  static editEvent = (event: IEvent) => {
    const request = new Request(EVENTS + "/" + event.id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
      body: JSON.stringify({
        event_name: event.event_name,
        start: event.start,
        end: event.end
      })
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
