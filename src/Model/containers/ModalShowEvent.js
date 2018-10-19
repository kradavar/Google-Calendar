import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent, editEvent } from "../actions/actions.js";
import { Modal } from "../../View/Modal";

import "../../Styles/Modal.css";
import CreateForm from "../FormItems/CreateForm.js";

class ModalShowEvent extends Component {
  state = {
    editMode: false
  };
  deleteCurrentEvent = () => {
    this.props.deleteEvent(this.props.id);
  };
  editCurrentEvent = () => {
    this.setState({
      editMode: true
    });
    document.getElementById("event-start").removeAttribute("readonly");
    document.getElementById("event-end").removeAttribute("readonly");
  };

  saveChanges = values => {
    const name = values.name;
    const start = values.start.date + " " + values.start.time;
    const end = values.end.date + " " + values.end.time;
    this.props.editEvent(this.props.id, name, start, end);
  };
  handleCheckBoxChange = values => {
    if (values.allDay) {
    } else {
    }
  };

  getRenderedHour = hour => {
    if (hour === undefined) {
      return "00:00";
    } else {
      if (hour < 10) {
        hour = `0${hour}`;
      }
      return hour + ":00";
    }
  };

  render() {
    return (
      <div className="modal" role="dialog">
        <Modal>
          <div className="modal-header">
            <h5 className="modal-title" id="showModalLabel">
              {this.state.editMode ? "Edit Event" : this.props.name}
            </h5>
            <button onClick={this.props.handleClose}>close</button>
            {this.state.editMode === false && (
              <button onClick={this.editCurrentEvent}>edit</button>
            )}
            <button onClick={this.deleteCurrentEvent}>delete</button>
          </div>

          <div className="modal-body">
            {this.state.editMode ? (
              <CreateForm
                onSubmit={this.saveChanges}
                handleCheckBoxChange={this.handleCheckBoxChange}
                initialValues={{
                  "event-type": false,
                  name: this.props.name,
                  start: {
                    date: this.props.start.split(" ")[0],
                    time: this.props.start.split(" ")[1]
                  },
                  end: {
                    date: this.props.end.split(" ")[0],
                    time: this.props.end.split(" ")[1]
                  }
                }}
              />
            ) : (
              <form>
                <div className="form-group">
                  <label htmlFor="event-start" className="col-form-label">
                    Start:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="event-start"
                    defaultValue={this.props.start}
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
                    defaultValue={this.props.end}
                    readOnly
                  />
                </div>
              </form>
            )}
          </div>
          {!this.state.editMode && (
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.handleClose}
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  {
    deleteEvent,
    editEvent
  }
)(ModalShowEvent);
