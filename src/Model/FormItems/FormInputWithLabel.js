import React from "react";

import { Field } from "redux-form";

// make HOR --- done???
export const FormInputWithLabelComponent = ({
  label,
  input,
  type,
  placeholder,
  disabled,
  ...props
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
        {...props}
      />
    </div>
  );
};

export const FormInputWithLabel = props => {
  return (
    <Field
      component={FormInputWithLabelComponent}
      name={props.name}
      props={{ ...props }}
    />
  );
};
