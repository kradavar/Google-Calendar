export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";

let nextEventId = 0;

export function addEvent(name, start, end) {
  return {
    type: ADD_EVENT,
    // TODO payload
    // payload: {
    //     id: nextEventId++,
    //     name,
    //     start,
    //     end
    // },
    id: nextEventId++,
    name,
    start,
    end
  };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}

export function editEvent(id, name, start, end) {
  return { type: EDIT_EVENT, id, name, start, end };
}
