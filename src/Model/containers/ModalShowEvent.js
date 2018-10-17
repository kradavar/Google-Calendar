import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent, editEvent } from "../actions/actions.js";

import "../../Styles/Modal.css";

class ModalShowEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  deleteCurrentEvent = () => {
    this.props.dispatch(deleteEvent(this.props.id));
  };
  editCurrentEvent = () => {
    this.setState({
      editMode: true
    });
    document.getElementById("event-start").removeAttribute("readonly");
    document.getElementById("event-end").removeAttribute("readonly");
  };

  saveChanges = () => {
    const name = document.getElementById("event-name").value;
    const start = document.getElementById("event-start").value;
    const end = document.getElementById("event-end").value;

    this.props.dispatch(editEvent(this.props.id, name, start, end));
  };

  render() {
    return (
      <div className="modal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
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
              <form>
                {this.state.editMode && (
                  <div className="form-group">
                    <label htmlFor="event-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="event-name"
                      defaultValue={this.props.name}
                    />
                  </div>
                )}
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.saveChanges}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ModalShowEvent);
