import { EventAPI } from "../../api/eventsAPI";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";

const addEventSuccess = event => {
  return {
    type: ADD_EVENT,
    payload: {
      ...event
    }
  };
};

const deleteEventSuccess = id => {
  return { type: DELETE_EVENT, payload: { id } };
};

const editEventSuccess = event => {
  const { start, end, event_name, id } = event;
  return { type: EDIT_EVENT, payload: { id, event_name, start, end } };
};

const loadEventsSuccess = events => {
  return { type: LOAD_EVENTS_SUCCESS, payload: { events } };
};

export const addEvent = (name, start, end) => dispatch =>
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

export const deleteEvent = id => dispatch =>
  EventAPI.deleteEvent(id)
    .then(() => {
      dispatch(deleteEventSuccess(id));
    })
    .catch(error => {
      throw error;
    });

export const editEvent = (id, name, start, end) => dispatch =>
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

export const loadUserEvents = () => dispatch =>
  EventAPI.getEvents()
    .then(events => {
      dispatch(loadEventsSuccess(events));
    })
    .catch(error => {
      throw error;
    });
