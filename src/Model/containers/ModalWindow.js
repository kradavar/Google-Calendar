import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import InputForm from "../../View/InputForm.js";

function ModalWindow(props) {
  const createNewEvent = e => {
    e.preventDefault();
    const name = document.getElementById("event-name").value;
    const end =
      document.getElementById("event-end-date").value +
      " " +
      document.getElementById("event-end-time").value;
    const start =
      document.getElementById("event-start-date").value +
      " " +
      document.getElementById("event-start-time").value;

    props.dispatch(addEvent(name, start, end));

    document.getElementById("event-name").value = "";
    document.getElementById("event-end").value = "";
    document.getElementById("event-start").value = "";
  };

  const getRenderedHour = () => {
    debugger;
    if (props.target === undefined) {
      return "00:00";
    } else {
      if (props.target < 10) {
        props.target = `0${props.target}`;
      }
      return props.target + ":00";
    }
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
                <label htmlFor="event-name" className="col-form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="event-name"
                  placeholder="Event Name"
                />
              </div>
              <InputForm
                type="start"
                date={props.renderedDate.clone().format("YYYY-MM-DD")}
                view={props.view}
                hour={getRenderedHour()}
                name={"Start: "}
              />
              <InputForm
                type="end"
                date={props.renderedDate.clone().format("YYYY-MM-DD")}
                view={props.view}
                hour={getRenderedHour()}
                name={"End: "}
              />
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
