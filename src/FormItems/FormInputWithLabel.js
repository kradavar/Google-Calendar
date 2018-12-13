import React from "react";
import { Field } from "redux-form";

import "../Styles/Modal.css";

export const FormInputWithLabelComponent = ({
  label,
  input,
  type,
  placeholder,
  disabled,
  classes = "form-group",
  meta,
  ...props
}) => {
  return (
    <div className={classes}>
      <label htmlFor="name-input" className="col-form-label">
        {label}
      </label>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={type === "checkbox" ? "checkbox" : "form-control"}
        disabled={disabled}
        {...props}
      />
      {meta.error && meta.touched && (
        <div className="error-message">{meta.error}</div>
      )}
    </div>
  );
};

export const FormInputWithLabel = props => {
  return (
    <Field
      component={FormInputWithLabelComponent}
      name={props.name}
      props={props}
    />
  );
};
