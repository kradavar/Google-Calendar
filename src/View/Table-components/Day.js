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

export default class Day extends Component {
  state = {
    showModal: false,
    targetHour: 0,
    headerClassName: "day-week-header sticky-top"
  };

  showModal = e => {
    if (this.props.view === "month") {
      this.setState({
        showModal: true,
        targetHour: 0,
        headerClassName: "day-week-header sticky-top hide"
      });
    } else {
      this.setState({
        showModal: true,
        targetHour: e.target.attributes.value.value /* don't like this */,
        headerClassName: "day-week-header sticky-top hide"
      });
    }
  };

  hideModal = e => {
    e.stopPropagation();
    this.setState({
      showModal: false,
      headerClassName: "day-week-header sticky-top"
    });
  };

  createDayCell() {
    const { renderedDate, view } = this.props;
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
              showModal={this.state.showModal}
              renderedDate={renderedDate}
              handleClose={this.hideModal}
              hour={0}
            />
          )}

          <CellHeader headerInfo={renderedDate.date()} />
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
            <RenderedEvents
              date={renderedDate}
              view={view}
              hour={hour}
              renderedHour={renderedHour.clone()}
            />
          </HourCell>
        );
        renderedHour.add(1, "hour");
      }

      return (
        <div className="flex-container">
          <DayWeekHeader
            renderedDate={renderedDate.date()}
            day={formatDate(renderedDate, DATE_FORMATS.DAY)}
            className={this.state.headerClassName}
          />
          {formatDate(renderedDate, DATE_FORMATS.DATE) ===
            formatDate(moment(), DATE_FORMATS.DATE) && <TimeLine />}

          <div className="day-flex">
            {hours}
            {this.state.showModal && (
              <ModalWindow
                renderedDate={renderedDate}
                createDayCell
                handleClose={this.hideModal}
                hour={+this.state.targetHour}
                view={view}
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
