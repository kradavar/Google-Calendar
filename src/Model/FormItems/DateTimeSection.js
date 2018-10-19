import React from "react";
import LabeledInput from "./LabeledInput";
export default function DateTimeSection({ label, date, view, hour }) {
  return (
    <div className="form-group">
      <label htmlFor="event" className="col-form-label">
        {label}
      </label>
      <div id="event">
        <LabeledInput
          labelText="Date: "
          type="date"
          id="event-date"
          content="date"
          name="date"
          contentValue={date}
        />
        {view === "month" ? (
          <LabeledInput
            labelText="Time:"
            type="time"
            name="time"
            id="event-time"
            content="time"
          />
        ) : (
          <LabeledInput
            labelText="Time:"
            type="time"
            name="time"
            id="event-time"
            content="time"
            contentValue={hour}
          />
        )}
      </div>
    </div>
  );
}
