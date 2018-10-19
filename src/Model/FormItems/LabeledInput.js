import React from "react";

import { Field } from "redux-form";
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";

export default function LabeledInput({
  labelText,
  id,
  inputType,
  content,
  contentValue,
  name
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="col-form-label">
        {labelText}
      </label>
      {content === "name" ? (
        <Field
          component="input"
          type={inputType}
          className="form-control"
          id={id}
          placeholder="Event Name"
          name={name}
        />
      ) : content === "date" ? (
        <Field
          component="input"
          id={id}
          name={name}
          props={{
            value: contentValue
          }}
        />
      ) : (
        <Field
          component={TimeInput}
          id={id}
          name={name}
          props={{
            value: contentValue
          }}
        />
      )}
    </div>
  );
}
