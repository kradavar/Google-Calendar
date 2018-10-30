import React, { Component } from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import ModalWindow from "../../Model/containers/ModalWindow";

import DayWeekHeader from "./DayWeekHeader.js";
import moment from "moment";
import TimeLine from "../TimeLine.js";
import HourCell from "./Cells/HourCell.js";
import { formatDate } from "./../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../Model/DateFormats.js";
import { SharedViewContext } from "../../Context.js";

export default class Day extends Component {
  state = {
    showModal: false,
    hour: 0,
    headerClassName: "day-week-header sticky-top"
  };

  getTargetHour = e => e.target.attributes.value.value;

  showModal = e => {
    // ???
    const targetHour = e.target.attributes.value
      ? e.target.attributes.value.value
      : 0;
    this.setState({
      showModal: true,
      hour: targetHour,
      headerClassName: "day-week-header sticky-top hide"
    });
  };

  hideModal = e => {
    e.stopPropagation();
    this.setState({
      showModal: false,
      headerClassName: "day-week-header sticky-top"
    });
  };

  createDayCell(view) {
    const { renderedDate } = this.props;
    const dayClassName =
      formatDate(renderedDate, DATE_FORMATS.DATE) ===
      formatDate(moment(), DATE_FORMATS.DATE)
        ? "current-day cell day"
        : "cell day";

    if (view === "month") {
      return (
        <div className={dayClassName} onClick={this.showModal}>
          {this.state.showModal && (
            <ModalWindow
              renderedDate={renderedDate}
              handleClose={this.hideModal}
              hour={+this.state.hour}
            />
          )}

          <CellHeader
            headerInfo={formatDate(renderedDate, DATE_FORMATS.DATE_OF_MONTH)}
          />
          <RenderedEvents date={renderedDate} view={view} />
        </div>
      );
    } else {
      const hours = [];
      const renderedHour = renderedDate.clone().startOf("day");

      for (let hour = 0; hour < 24; hour++) {
        hours.push(
          <HourCell key={hour} onClick={this.showModal} value={hour}>
            <CellHeader headerInfo={hour} value={hour} />
            <RenderedEvents date={renderedDate} view={view} hour={hour} />
          </HourCell>
        );
        renderedHour.add(1, "hour");
      }
      return (
        <div className="flex-container">
          <DayWeekHeader
            renderedDate={renderedDate}
            className={this.state.headerClassName}
          />
          {formatDate(renderedDate, DATE_FORMATS.DATE) ===
            formatDate(moment(), DATE_FORMATS.DATE) && <TimeLine />}

          <div className="day-flex">
            {hours}
            {this.state.showModal && (
              <ModalWindow
                renderedDate={renderedDate}
                handleClose={this.hideModal}
                hour={+this.state.hour}
              />
            )}
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <SharedViewContext.Consumer>
        {({ view }) => <>{this.createDayCell(view)}</>}
      </SharedViewContext.Consumer>
    );
  }
}
