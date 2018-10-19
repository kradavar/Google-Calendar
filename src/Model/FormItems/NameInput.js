import React from "react";

export const NameInput = field => {
  return (
    <div className="form-group">
      <label htmlFor="name-input" className="col-form-label">
        Name:
      </label>
      <input
        {...field.input}
        type="text"
        placeholder="Event Name"
        id="name-input"
        className="form-control"
      />
    </div>
  );
};
