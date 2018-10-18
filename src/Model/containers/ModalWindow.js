import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import InputForm from "../InputForm.js";
import Modal from "../../View/Modal";

function ModalWindow(props) {
  const getInputValue = id => document.getElementById(id).value;
  const createNewEvent = e => {
    e.preventDefault();
    const name = getInputValue("event-name");
    let end;
    let start;

    const allDay = document.getElementById("all-day").checked;

    if (allDay) {
      end = getInputValue("event-end-date") + " 24:00";
      start = getInputValue("event-start-date") + " 00:00";
    } else {
      end =
        getInputValue("event-end-date") + " " + getInputValue("event-end-time");
      start =
        getInputValue("event-start-date") +
        " " +
        getInputValue("event-start-time");
    }

    props.dispatch(addEvent(name, start, end));

    document.getElementById("event-name").value = "";
    document.getElementById("event-end").value = "";
    document.getElementById("event-start").value = "";
  };

  const getRenderedHour = hour => {
    if (hour === undefined) {
      return "00:00";
    } else {
      if (hour < 10) {
        hour = `0${hour}`;
      }
      return hour + ":00";
    }
  };

  const handleCheckBoxChange = () => {
    if (document.getElementById("all-day").checked) {
      document.getElementById("event-start-time").disabled = true;
      document.getElementById("event-end-time").disabled = true;
    } else {
      document.getElementById("event-start-time").disabled = false;
      document.getElementById("event-end-time").disabled = false;
    }
  };

  return (
    <div className="modal" role="dialog">
      <Modal>
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
            <div className="form-group">
              <label htmlFor="all-day" className="col-form-label">
                All day
              </label>
              <input
                type="checkbox"
                id="all-day"
                name="event-type"
                value="all-day"
                onChange={handleCheckBoxChange}
              />
            </div>
            <InputForm
              type="start"
              date={props.renderedDate.clone().format("YYYY-MM-DD")}
              view={props.view}
              hour={getRenderedHour(+props.target)}
              name={"Start: "}
            />
            <InputForm
              type="end"
              date={props.renderedDate.clone().format("YYYY-MM-DD")}
              view={props.view}
              hour={getRenderedHour(+props.target + 1)}
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
      </Modal>
    </div>
  );
}

export default connect()(ModalWindow);
