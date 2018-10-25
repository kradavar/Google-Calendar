export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";

let nextEventId = 0;

export const addEvent = (name, start, end) => {
  return {
    type: ADD_EVENT,
    payload: {
      id: nextEventId++,
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
