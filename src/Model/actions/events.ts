import { normalize } from "normalizr";

import { EventAPI } from "../../api/eventsAPI";
import { user } from "../../api/schema";

export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";
export const REMOVE_EVENTS = "REMOVE_EVENTS";

//  Add EventType
const addEventSuccess = (event: Object) => {
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
const editEventSuccess = (event: Object) => {
  const { start, end, event_name, id }: any = event;
  return { type: EDIT_EVENT, payload: { id, event_name, start, end } };
};

// STORE_EVENTS ?
export const loadEventsSuccess = (response: Array<Object>) => {
  const {
    entities: { events }
  } = normalize(response, [user]);
  return { type: LOAD_EVENTS_SUCCESS, payload: { events } };
};

export const removeEvents = () => {
  // Does it make sense in payload: {} ?
  return { type: REMOVE_EVENTS, payload: {} };
};

// TODO start, end, ... => event: EventType
export const addEvent = (name: string, start: string, end: string) => (
  dispatch: Function
) =>
  EventAPI.createEvent(name, start, end)
    .then(result => {
      dispatch(
        addEventSuccess({
          id: result.insertId,
          event_name: name,
          start,
          end
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
export const editEvent = (
  id: number,
  name: string,
  start: string,
  end: string
) => (dispatch: Function) =>
  EventAPI.editEvent(id, name, start, end)
    .then(() => {
      dispatch(
        editEventSuccess({
          id,
          event_name: name,
          start,
          end
        })
      );
    })
    .catch(error => {
      throw error;
    });
