import { EventAPI } from "../../api/eventsAPI";
import { normalize } from "normalizr";
import { users } from "../../api/schema";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";
export const LOAD_EVENTS_EMPTY = "LOAD_EVENTS_EMPTY";
export const REMOVE_EVENTS = "REMOVE_EVENTS";

const addEventSuccess = (event: Object) => {
  return {
    type: ADD_EVENT,
    payload: {
      ...event
    }
  };
};

const deleteEventSuccess = (id: number) => {
  return { type: DELETE_EVENT, payload: { id } };
};

const editEventSuccess = (event: Object) => {
  const { start, end, event_name, id }: any = event;
  return { type: EDIT_EVENT, payload: { id, event_name, start, end } };
};

export const loadEventsSuccess = (events: Array<Object>) => {
  const eventsNorm = normalize(events, users);
  return { type: LOAD_EVENTS_SUCCESS, payload: { eventsNorm } };
};

export const loadEventsEmpty = () => {
  console.log("loadEvents Empty");
  return { type: LOAD_EVENTS_EMPTY, payload: {} };
};

export const removeEvents = () => {
  return { type: REMOVE_EVENTS, payload: {} };
};

export const loadUserEvents = () => (dispatch: Function) => {
  return EventAPI.getEvents()
    .then((result: any) => {
      console.log("result of eventAPI in actions", result);
      if (result.hasErrors) {
        console.log("hasErrors");
        dispatch(loadEventsEmpty());
      } else {
        dispatch(loadEventsSuccess(result));
      }
    })
    .catch(err => err);
};

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
