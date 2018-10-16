import React, { Component } from "react";

import "../../Styles/Event.css";
import ModalShowEvent from "../../Model/containers/ModalShowEvent";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClose = e => {
    this.setState({
      showModal: false
    });
    e.stopPropagation();
  };

  handleOpen = e => {
    this.setState({
      showModal: true
    });
    e.stopPropagation();
  };

  render() {
    return (
      <li>
        {this.props.view === "month" ? (
          <div className="event" onClick={this.handleOpen}>
            {this.state.showModal && (
              <ModalShowEvent
                showModal={this.state.showModal}
                handleClose={this.handleClose}
                start={this.props.start}
                end={this.props.end}
                name={this.props.name}
                id={this.props.id}
              />
            )}
            {this.props.start.split(" ")[1]}-{this.props.name}
          </div>
        ) : (
          <div className="event-day" onClick={this.handleOpen}>
            {this.state.showModal && (
              <ModalShowEvent
                showModal={this.state.showModal}
                handleClose={this.handleClose}
                start={this.props.start}
                end={this.props.end}
                name={this.props.name}
                id={this.props.id}
              />
            )}
            <div className="event-header">{this.props.name}</div>
            <div className="event--time">
              {this.props.start} - {this.props.end}
            </div>
          </div>
        )}
      </li>
    );
  }
}
