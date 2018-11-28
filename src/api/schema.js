import { schema } from "normalizr";

const user = new schema.Entity("userID");

const eventsById = new schema.Entity("events");

const allInfo = new schema.Entity("all-events", {
  usersById: user,
  events: [eventsById]
});
