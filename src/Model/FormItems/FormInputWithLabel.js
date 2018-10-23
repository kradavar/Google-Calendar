import React from "react";

export const FormInputWithLabel = field => {
  //debugger;
  return (
    <div className="form-group">
      <label htmlFor="name-input" className="col-form-label">
        {field.label}
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
