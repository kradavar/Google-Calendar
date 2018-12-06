import { IEvent } from "./events";
import { normalize } from "normalizr";

import { EventAPI } from "../../api/eventsAPI";
import { user } from "../../api/schema";

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

const storeEventsSuccess = (response: any) => {
  if (
    (response.length === 1 && response[0].events.length !== 0) ||
    response.length > 1
  ) {
    const {
      entities: { events }
    } = normalize(response, [user]);
    return { type: STORE_EVENTS, payload: { events } };
  } else
    return {
      type: STORE_EVENTS,
      payload: {
        events: {}
      }
    };
};

export const removeEvents = () => {
  return { type: REMOVE_EVENTS };
};

export const storeEvents = () => (dispatch: Function) => {
  dispatch(setFetchingState());
  EventAPI.getEvents()
    .then(result => {
      console.log(result);
      dispatch(storeEventsSuccess(result));
    })
    .catch(err => {
      throw err;
    });
};

const setFetchingState = () => {
  return {
    type: IS_FETCHING
  };
};

export const addEvent = (event: IEvent) => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.createEvent(event).then(result => {
    dispatch(storeEvents());
  });
};

export const editEvent = (event: IEvent) => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.editEvent(event).then(result => {
    dispatch(storeEvents());
  });
};

export const deleteEvent = (id: number) => (dispatch: Function) => {
  dispatch(setFetchingState());
  return EventAPI.deleteEvent(id).then(result => {
    dispatch(storeEvents());
  });
};
