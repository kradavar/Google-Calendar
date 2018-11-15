import eventsAPI from "../../api/eventsAPI";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";

export const addEvent = (name, start, end) => {
  return {
    type: ADD_EVENT,
    payload: {
      name,
      start,
      end
    }
  };
};

export const deleteEvent = id => {
  return { type: DELETE_EVENT, payload: { id } };
};

export const editEvent = (id, name, start, end) => {
  return { type: EDIT_EVENT, payload: { id, name, start, end } };
};

export const loadEventsSuccess = events => {
  return { type: LOAD_EVENTS_SUCCESS, payload: { events } };
};

export const loadUserEvents = () => dispatch =>
  eventsAPI
    .getEvents()
    .then(events => {
      dispatch(loadEventsSuccess(events));
    })
    .catch(error => {
      throw error;
    });
