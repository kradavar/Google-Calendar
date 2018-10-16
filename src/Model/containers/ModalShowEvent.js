import React from "react";
import { connect } from "react-redux";
import { deleteEvent } from "../actions/actions.js";

import "../../Styles/Modal.css";

function ModalShowEvent(props) {
  const deleteCurrentEvent = () => {
    props.dispatch(deleteEvent(props.id));
  };
  const editCurrentEvent = () => {
    props.dispatch();
  };

  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="showModalLabel">
              {props.name}
            </h5>
            <button onClick={props.handleClose}>close</button>
            <button onClick={editCurrentEvent}>edit</button>
            <button onClick={deleteCurrentEvent}>delete</button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="event-start" className="col-form-label">
                  Start:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="event-start"
                  defaultValue={props.start}
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
                  defaultValue={props.end}
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
              onClick={props.handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(ModalShowEvent);
