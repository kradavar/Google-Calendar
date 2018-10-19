import React from "react";

export const DateInput = field => {
  return (
    <div className="form-group">
      <label htmlFor="date-input" className="col-form-label">
        Date:
      </label>
      <input
        {...field.input}
        type="date"
        defaultValue={field.value}
        id="date-input"
        className="form-control"
      />
    </div>
  );
};
