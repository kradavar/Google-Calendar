import React from "react";
export const TimeInput = (field, isAllDay) => {
  return (
    <div className="form-group">
      <label htmlFor="time-input" className="col-form-label">
        Time:
      </label>
      <input
        {...field.input}
        type="time"
        id="time-input"
        className="form-control"
        disabled={isAllDay}
      />
    </div>
  );
};
