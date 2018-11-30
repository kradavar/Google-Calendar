import { Entity, schema } from "normalizr";
// Entity doesn't work
const event = new schema.Entity("events");
export const user = new schema.Entity(
  "users",
  { events: [event] },
  { idAttribute: "userId" }
);
