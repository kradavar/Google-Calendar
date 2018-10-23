import React from "react";

const ShowForm = ({ start, end }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="event-start" className="col-form-label">
          Start:
        </label>
        <input
          type="text"
          className="form-control"
          id="event-start"
          defaultValue={start}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="event-end" className="col-form-label">
          End:
        </label>
        <input
          type="text"
          className="form-control"
          id="event-end"
          defaultValue={end}
          readOnly
        />
      </div>
    </form>
  );
};

export default ShowForm;
