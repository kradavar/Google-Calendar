import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent, editEvent } from "../actions/actions.js";
import { Modal } from "../../View/ModalIems/Modal";

import "../../Styles/Modal.css";
import CreateForm from "../FormItems/CreateForm.js";
import ShowForm from "../FormItems/ShowForm.js";

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
    const { start, end, name } = this.props;

    const buttons = (
      <div>
        <button onClick={this.props.handleClose}>close</button>
      </div>
    );
    return (
      <Modal
        header={this.state.editMode ? "Edit Event" : this.props.name}
        buttons={buttons}
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
              onClick={this.props.handleClose}
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
              name: this.props.name,
              start: {
                date: start.split(" ")[0],
                time: start.split(" ")[1]
              },
              end: {
                date: end.split(" ")[0],
                time: end.split(" ")[1]
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
