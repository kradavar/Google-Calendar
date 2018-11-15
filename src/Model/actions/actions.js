import eventsAPI from "../../api/eventsAPI";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";

export const addEventSuccess = event => {
  const { start, end, event_name, id } = event;
  const userID = event.user_id;
  return {
    type: ADD_EVENT,
    payload: {
      id,
      event_name,
      start,
      end,
      userID
    }
  };
};

export const deleteEventSuccess = id => {
  return { type: DELETE_EVENT, payload: { id } };
};

export const editEventSuccess = event => {
  const { start, end, event_name, id } = event;
  const userID = event.user_id;
  return { type: EDIT_EVENT, payload: { id, event_name, start, end, userID } };
};

export const loadEventsSuccess = events => {
  return { type: LOAD_EVENTS_SUCCESS, payload: { events } };
};

export const addEvent = (name, start, end, userID) => dispatch =>
  eventsAPI
    .createEvent(name, start, end, userID)
    .then(result => {
      dispatch(
        addEventSuccess({
          id: result.insertId,
          event_name: name,
          start,
          end,
          user_id: userID
        })
      );
    })
    .catch(error => {
      throw error;
    });

export const deleteEvent = id => dispatch =>
  eventsAPI
    .deleteEvent(id)
    .then(() => {
      dispatch(deleteEventSuccess(id));
    })
    .catch(error => {
      throw error;
    });

export const editEvent = (id, name, start, end, userID) => dispatch =>
  eventsAPI
    .editEvent(id, name, start, end, userID)
    .then(() => {
      dispatch(
        editEventSuccess({
          id,
          event_name: name,
          start,
          end,
          user_id: userID
        })
      );
    })
    .catch(error => {
      throw error;
    });

export const loadUserEvents = () => dispatch =>
  eventsAPI
    .getEvents()
    .then(events => {
      dispatch(loadEventsSuccess(events));
    })
    .catch(error => {
      throw error;
    });
