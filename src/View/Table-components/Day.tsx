import * as React from "react";
import { CellHeader } from "./Cells/CellHeader";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import ModalWindow from "../../Model/containers/ModalWindow";

import { DayWeekHeader } from "./DayWeekHeader";

import * as moment from "moment";
import TimeLine from "../TimeLine.js";
import { HourCell } from "./Cells/HourCell";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/DateFormats.js";
import { SharedViewContext } from "../../Context.js";
import { VIEW } from "../../constants/ViewTypes";

export interface IDayProps {
  renderedDate: moment.Moment;
  date?: moment.Moment;
}

export interface IDayState {
  showModal: boolean;
  hour: string | number;
  headerClassName: string;
}

export default class Day extends React.Component<IDayProps, IDayState> {
  state = {
    showModal: false,
    hour: 0,
    headerClassName: "day-week-header sticky-top"
  };

  // React.ChangeEvent<HTMLDivElement>
  // React.MouseEvent
  showModal = (e: any): void => {
    const attr: string | null = e.target.getAttribute("data-hour");
    this.setState({
      showModal: true,
      hour: attr ? attr : 0,
      headerClassName: "day-week-header sticky-top hide"
    });
  };

  hideModal = (e: Event): void => {
    e.stopPropagation();
    this.setState({
      showModal: false,
      headerClassName: "day-week-header sticky-top"
    });
  };

  createDayCellMonth = (date: moment.Moment): JSX.Element => {
    const { renderedDate } = this.props;

    let dayClassName: string =
      formatDate(renderedDate, DATE_FORMATS.DATE) ===
      formatDate(moment(), DATE_FORMATS.DATE)
        ? "current-day cell day"
        : "cell day";
    console.log(formatDate(date, DATE_FORMATS.DATE));
    dayClassName +=
      formatDate(renderedDate, DATE_FORMATS.NUMBER_MONTH) ===
      formatDate(date, DATE_FORMATS.NUMBER_MONTH)
        ? ""
        : " not-current-month";

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
        <RenderedEvents date={renderedDate} />
      </div>
    );
  };

  createDayCell = (): JSX.Element => {
    const { renderedDate } = this.props;
    const hours: Array<JSX.Element> = [];
    const renderedHour: moment.Moment = moment(renderedDate.startOf("day"));

    for (let hour = 0; hour < 24; hour++) {
      hours.push(
        <HourCell key={hour} onClick={this.showModal} hour={hour}>
          <CellHeader headerInfo={hour} hour={hour} />
          <RenderedEvents date={renderedDate} hour={hour} />
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
  };
  render() {
    return (
      <SharedViewContext.Consumer>
        {({
          view,
          renderedDate
        }: {
          view: string;
          renderedDate: moment.Moment;
        }) => (
          <React.Fragment>
            {view === VIEW.MONTH ? (
              <React.Fragment>
                {this.createDayCellMonth(renderedDate)}
              </React.Fragment>
            ) : (
              <React.Fragment>{this.createDayCell()}</React.Fragment>
            )}
          </React.Fragment>
        )}
      </SharedViewContext.Consumer>
    );
  }
}
