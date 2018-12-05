import { IEvent } from "./events";
import { normalize } from "normalizr";

import { EventAPI } from "../../api/eventsAPI";
import { user } from "../../api/schema";

export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";
export const REMOVE_EVENTS = "REMOVE_EVENTS";

export interface IEvent {
  id: number;
  start: string;
  end: string;
  event_name: string;
  user_id?: number;
}

const addEventSuccess = (event: IEvent) => {
  return {
    type: ADD_EVENT,
    payload: event
  };
};

const deleteEventSuccess = (id: number) => {
  return { type: DELETE_EVENT, payload: { id } };
};

// EDIT_EVENT_SUCCESS
// EDIT_EVENT_FAILURE ???
const editEventSuccess = (event: IEvent) => {
  const { start, end, event_name, id }: any = event;
  return { type: EDIT_EVENT, payload: { id, event_name, start, end } };
};

// STORE_EVENTS ?
export const loadEventsSuccess = (response: any) => {
  if (
    (response.length === 1 && response[0].events.length !== 0) ||
    response.length > 1
  ) {
    const {
      entities: { events }
    } = normalize(response, [user]);
    return { type: LOAD_EVENTS_SUCCESS, payload: { events } };
  } else
    return {
      type: LOAD_EVENTS_SUCCESS,
      payload: {
        events: {}
      }
    };
};

export const removeEvents = () => {
  return { type: REMOVE_EVENTS };
};

export const loadEvents = () => (dispatch: Function) =>
  EventAPI.getEvents()
    .then(result => {
      dispatch(loadEventsSuccess(result));
    })
    .catch(err => {
      throw err;
    });
export const addEvent = (event: IEvent) => (dispatch: Function) =>
  EventAPI.createEvent(event)
    .then(result => {
      dispatch(
        addEventSuccess({
          id: result.insertId,
          event_name: event.event_name,
          start: event.start,
          end: event.end
        })
      );
    })
    .catch(error => {
      throw error;
    });

export const deleteEvent = (id: number) => (dispatch: Function) =>
  EventAPI.deleteEvent(id)
    .then(() => {
      dispatch(deleteEventSuccess(id));
    })
    .catch(error => {
      throw error;
    });

// EDIT_EVENT
export const editEvent = (event: IEvent) => (dispatch: Function) =>
  EventAPI.editEvent(event)
    .then(() => {
      dispatch(editEventSuccess(event));
    })
    .catch(error => {
      throw error;
    });
