import { schema } from "normalizr";
const event = new schema.Entity("events");
const user = new schema.Entity(
  "users",
  {
    events: [event]
  },
  {
    idAttribute: "userId"
  }
);

export const users = [user];
