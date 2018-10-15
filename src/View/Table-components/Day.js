import React, { Component } from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import ModalWindow from "../ModalWindow.js";

export default class Day extends Component {
  constructor(props) {
    super(props);

    console.warn("constructor", { self: this });

    this.state = {
      showModal: false,

      showModalV2: false
    };
    //this.showModal = this.showModal.bind(this);
    //this.hideModal = this.hideModal.bind(this);
  }

  showModal = event => {
    console.warn("showModal", { self: this, event });

    this.setState({
      showModalV2: true
    });
  };

  hideModal = e => {
    console.warn("hideModal", { self: this, e });

    this.setState({
      showModalV2: false,
      test: "test"
    });

    e.preventDefault();
  };

  createDayCell() {
    if (this.props.view === "month") {
      console.warn("createDayCell", { state: this.state });

      return (
        <td
          className="cell day-cell"
          onClick={() => this.setState({ showModalV2: true })}
        >
          {this.state.showModalV2 && (
            <ModalWindow
              renderedDate={this.props.renderedDate}
              handleClose={() => this.setState({ showModalV2: false })}
            />
          )}

          <CellHeader headerInfo={this.props.renderedDate.date()} />
          <RenderedEvents
            date={this.props.renderedDate}
            view={this.props.view}
          />
        </td>
      );
    } else {
      const hours = [];

      for (let hour = 0; hour < 24; hour++) {
        hours.push(
          <tr>
            <td className="hour-cell">
              <CellHeader headerInfo={hour} />
              <RenderedEvents
                date={this.props.renderedDate}
                view={this.props.view}
                hour={hour}
              />
            </td>
          </tr>
        );
      }
      return (
        <td className="cell-with-hour">
          <table className="hour-table">
            <tbody>{hours}</tbody>
          </table>
        </td>
      );
    }
  }

  render() {
    console.warn("render", { state: this.state });

    return (
      <td
        className="cell day-cell"
        onClick={() => this.setState({ showModalV2: true })}
      >
        {this.state.showModalV2 && (
          <ModalWindow
            renderedDate={this.props.renderedDate}
            handleClose={() => this.setState({ showModalV2: false })}
          />
        )}
      </td>
    );
  }
}
