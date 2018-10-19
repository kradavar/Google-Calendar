import React from "react";

export default function DateInput({ value, id }) {
  return (
    <input type="time" defaultValue={value} id={id} className="form-control" />
  );
}
