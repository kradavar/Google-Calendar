export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export function addEvent(name) {
  return { type: ADD_EVENT, name };
}

export function deleteEvent(name) {
  return { type: DELETE_EVENT, name };
}
