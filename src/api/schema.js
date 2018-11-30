import { Entity } from "normalizr";

const event = new Entity("events");
const user = new Entity("users", { events: [event] }, { idAttribute: "userId" });

export const users = [user];
