import React, { Component } from "react";

import { connect } from "react-redux";
import { addEvent } from "../Model/actions/actions.js";
import "../Styles/Modal.css";

function ModalWindow(props) {
  const createNewEvent = e => {
    e.preventDefault();
    const name = document.getElementById("event-name").value;
    const end = document.getElementById("event-end").value;
    const start = document.getElementById("event-start").value;

    props.dispatch(addEvent(name, start, end));

    document.getElementById("event-name").value = "";
    document.getElementById("event-end").value = "";
    document.getElementById("event-start").value = "";
  };

  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createModalLabel">
              Create New Event
            </h5>
            <button onClick={props.handleClose}>close</button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="event-start" className="col-form-label">
                  Start:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="event-start"
                  defaultValue={props.renderedDate
                    .clone()
                    .format("YYYY-MM-DD HH:mm")}
                />
              </div>
              <div className="form-group">
                <label for="event-end" className="col-form-label">
                  End:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="event-end"
                  defaultValue={props.renderedDate
                    .clone()
                    .add(1, "hour")
                    .format("YYYY-MM-DD HH:mm")}
                />
              </div>
              <div className="form-group">
                <label for="event-name" className="col-form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="event-name"
                  placeholder="Event Name"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={createNewEvent}
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(ModalWindow);
