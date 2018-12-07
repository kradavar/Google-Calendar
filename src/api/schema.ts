import { schema } from "normalizr";

export const event = new schema.Entity("events");
export const user = new schema.Entity(
  "users",
  { events: [event] },
  { idAttribute: "userId" }
);
