export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const SHOW_EVENT = "SHOW_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";

let nextEventId = 0;
export function addEvent(name, start, end) {
  return {
    type: ADD_EVENT,
    id: nextEventId++,
    name,
    start,
    end
  };
}

export function deleteEvent(name) {
  return { type: DELETE_EVENT, name };
}

export function showEvent(id) {
  return { type: SHOW_EVENT, id };
}

export function editEvent(id) {
  return { type: EDIT_EVENT, id };
}
