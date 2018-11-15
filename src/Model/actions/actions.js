import eventsAPI from "../../api/eventsAPI";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";

export const addEventSuccess = event => {
  const { start, end } = event;
  const name = event.event_name;
  const userID = event.user_id;
  console.log(event);
  debugger;
  return {
    type: ADD_EVENT,
    payload: {
      name,
      start,
      end,
      userID
    }
  };
};
export const addEvent = (name, start, end, userID) => dispatch =>
  eventsAPI
    .createEvent(name, start, end, userID)
    .then(event => {
      dispatch(addEventSuccess(event));
    })
    .catch(error => {
      throw error;
    });

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
