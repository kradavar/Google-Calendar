import React from "react";

const ShowInput = ({ label, data }) => {
  return (
    <div className="form-group">
      <label htmlFor="event-border" className="col-form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id="event-border"
        defaultValue={data}
        readOnly
      />
    </div>
  );
};

export default ShowInput;
