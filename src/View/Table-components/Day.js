import React, { Component } from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import ModalWindow from "../../Model/containers/ModalWindow";

import DayWeekHeader from "./DayWeekHeader.js";
import moment from "moment";
import TimeLine from "../TimeLine.js";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      targetHour: 0
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(e) {
    this.setState({
      showModal: true,
      targetHour: e.target.textContent
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
          <div className="hour" key={hour} onClick={this.showModal}>
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
          {this.props.renderedDate.format("YYYY-MM-DD") ===
            moment().format("YYYY-MM-DD") && <TimeLine />}

          <div className="day-flex">
            {hours}
            {this.state.showModal && (
              <ModalWindow
                renderedDate={this.props.renderedDate}
                handleClose={this.hideModal}
                target={this.state.targetHour}
                view={this.props.view}
              />
            )}
          </div>
        </div>
      );
    }
  }
  render() {
    return this.createDayCell();
  }
}
