import React, { Component } from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import ModalWindow from "../ModalWindow.js";

import DayWeekHeader from "./DayWeekHeader.js";
import moment from "moment";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({
      showModal: false
    });
  }

  createDayCell() {
    const dayClassName =
      this.props.renderedDate.format("YYYY-MM-DD") ===
      moment().format("YYYY-MM-DD")
        ? "current-day cell day"
        : "cell day";

    if (this.props.view === "month") {
      return (
        <div className={dayClassName} onClick={this.showModal}>
          {this.state.showModal && (
            <ModalWindow
              showModal={this.state.showModal}
              renderedDate={this.props.renderedDate}
              handleClose={this.hideModal}
            />
          )}

          <CellHeader headerInfo={this.props.renderedDate.date()} />
          <RenderedEvents
            date={this.props.renderedDate}
            view={this.props.view}
          />
        </div>
      );
    } else {
      const hours = [];

      for (let hour = 0; hour < 24; hour++) {
        hours.push(
          <div className="hour" key={hour}>
            <CellHeader headerInfo={hour} />
            <RenderedEvents
              date={this.props.renderedDate}
              view={this.props.view}
              hour={hour}
            />
          </div>
        );
      }
      return (
        <div className="flex-container">
          <DayWeekHeader
            renderedDate={this.props.renderedDate.date()}
            day={this.props.renderedDate.format("ddd")}
          />
          <div className="day-flex">{hours}</div>
        </div>
      );
    }
  }
  render() {
    return this.createDayCell();
  }
}
