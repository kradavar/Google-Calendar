import React, { Component } from "react";
import AllEvents from "../../Model/containers/AllEvents";

export default class RenderedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedEvents: []
    };
  }

  getCorrectEvents() {
    let date = this.props.renderedDate.clone();
    this.setState({
      renderedEvents: AllEvents
    });
  }

  render() {
    return;
  }
}
