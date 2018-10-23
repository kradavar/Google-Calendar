import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent, editEvent } from "../actions/actions.js";
import { Modal } from "../../View/ModalIems/Modal";

import "../../Styles/Modal.css";
import CreateForm from "../FormItems/CreateForm.js";
import ShowForm from "../FormItems/ShowForm.js";
import { getValueOfMoment } from "../getRenderedDateInfo";

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
              <button onClick={this.editCurrentEvent}>edit</button>
            )}
            <button onClick={this.deleteCurrentEvent}>delete</button>
            <button
              type="button"
              className="btn btn-secondary"
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
                date: getValueOfMoment(start, "date"),
                time: getValueOfMoment(start, "time")
              },
              end: {
                date: getValueOfMoment(end, "date"),
                time: getValueOfMoment(end, "time")
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
