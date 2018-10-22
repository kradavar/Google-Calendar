import React from "react";
export const TimeInput = field => {
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
        disabled={field.disabled}
      />
    </div>
  );
};
