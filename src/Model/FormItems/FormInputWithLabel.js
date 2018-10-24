import React from "react";

export const FormInputWithLabel = ({
  label,
  input,
  type,
  placeholder,
  disabled
}) => {
  return (
    <div className="form-group">
      <label htmlFor="name-input" className="col-form-label">
        {label}
      </label>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={type === "checkbox" ? "" : "form-control"}
        disabled={disabled}
      />
    </div>
  );
};
