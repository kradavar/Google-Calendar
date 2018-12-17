import { IEvent } from "./../actions/events";
import { makeRequest } from "./requestWrapper";
import { EVENTS } from "./enpoints";

export const getEvents = () => makeRequest(EVENTS, "GET");

export const createEvent = (event: IEvent) =>
  makeRequest(EVENTS, "POST", JSON.stringify(event));

export const editEvent = (event: IEvent) =>
  makeRequest(
    EVENTS + "/" + event.id,
    "PUT",
    JSON.stringify({
      event_name: event.event_name,
      start: event.start,
      end: event.end
    })
  );

export const deleteEvent = (id: number) =>
  makeRequest(EVENTS + "/" + id, "DELETE");
