import { schema } from "normalizr";

const event = new schema.Entity("events");
export const user = new schema.Entity(
  "users",
  { events: [event] },
  { idAttribute: "userId" }
);
