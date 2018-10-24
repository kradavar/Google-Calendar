import React from "react";

export const FormInputWithLabel = field => {
  return (
    <div className="form-group">
      <label htmlFor="name-input" className="col-form-label">
        {field.label}
      </label>
      <input
        {...field.input}
        type={field.type}
        placeholder={field.placeholder}
        className="form-control"
        disabled={field.disabled}
      />
    </div>
  );
};
