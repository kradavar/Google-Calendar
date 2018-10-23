import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent, editEvent } from "../actions/actions.js";
import { Modal } from "../../View/ModalIems/Modal";

import "../../Styles/Modal.css";
import CreateForm from "../FormItems/CreateForm.js";
import ShowForm from "../FormItems/ShowForm.js";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../DateFormats.js";

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
    const { start, end, name, handleClose } = this.props;

    return (
      <Modal
        header={this.state.editMode ? "Edit Event" : name}
        handleClose={handleClose}
        bottom={
          <div>
            {this.state.editMode === false && (
              <button
                onClick={this.editCurrentEvent}
                className="btn btn-outline-info"
              >
                Edit
              </button>
            )}
            <button
              onClick={this.deleteCurrentEvent}
              className="btn btn-outline-primary"
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        }
      >
        {this.state.editMode ? (
          <CreateForm
            onSubmit={this.saveChanges}
            handleCheckBoxChange={this.handleCheckBoxChange}
            initialValues={{
              "event-type": false,
              name: name,
              start: {
                date: formatDate(start, DATE_FORMATS.DATE),
                time: formatDate(start, DATE_FORMATS.TIME)
              },
              end: {
                date: formatDate(end, DATE_FORMATS.DATE),
                time: formatDate(end, DATE_FORMATS.TIME)
              }
            }}
          />
        ) : (
          <ShowForm start={start} end={end} />
        )}
      </Modal>
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
