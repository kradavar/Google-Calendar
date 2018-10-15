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
              <div class="form-group">
                <label for="event-start" class="col-form-label">
                  Start:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="event-start"
                  value={props.renderedDate.clone().format("YYYY-MM-DD HH:mm")}
                />
              </div>
              <div class="form-group">
                <label for="event-end" class="col-form-label">
                  End:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="event-end"
                  value={props.renderedDate
                    .clone()
                    .add(1, "hour")
                    .format("YYYY-MM-DD HH:mm")}
                />
              </div>
              <div class="form-group">
                <label for="event-name" class="col-form-label">
                  Name:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="event-name"
                  value="Event Name"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.handleClose}
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={createNewEvent}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(ModalWindow);
