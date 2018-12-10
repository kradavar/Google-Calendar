import { IEvent } from "./events";
import { normalize } from "normalizr";

import { EventAPI } from "../../api/eventsAPI";
import { user, event } from "../../api/schema";

export const STORE_EVENTS = "STORE_EVENTS";
export const REMOVE_EVENTS = "REMOVE_EVENTS";
export const IS_FETCHING = "IS_FETCHING";

export interface IEvent {
  id: number;
  start: string;
  end: string;
  event_name: string;
  user_id?: number;
}

const normalizeEvent = (eventFromServer: IEvent) => {
  const {
    entities: { events }
  } = normalize(eventFromServer, event);
  return events;
};

const normalizeEvents = (responseEvents: Array<IEvent>) => {
  const {
    entities: { events }
  } = normalize(responseEvents, [user]);
  return events;
};

const storeEventsSuccess = (response: any) => {
  return {
    type: STORE_EVENTS,
    payload: {
      events: response
    }
  };
};

export const removeEvents = () => {
  return { type: REMOVE_EVENTS };
};

const setFetchingState = () => {
  return { type: IS_FETCHING };
};

export const storeEvents = () => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.getEvents()
    .then(result => {
      const events = normalizeEvents(result);
      dispatch(storeEventsSuccess(events));
    })
    .catch(err => {
      throw err;
    });
};

export const addEvent = (event: IEvent) => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.createEvent(event).then(result => {
    const event = normalizeEvent(result);
    dispatch(storeEventsSuccess(event));
  });
};

export const editEvent = (event: IEvent) => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.editEvent(event).then(result => {
    const event = normalizeEvent(result);
    dispatch(storeEventsSuccess(event));
  });
};

export const deleteEvent = (id: number) => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.deleteEvent(id).then(result => {
    const event = { [result.id]: undefined };
    dispatch(storeEventsSuccess(event));
  });
};
