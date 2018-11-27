import React, { Component } from "react";
import moment from "moment";
import "./Styles/App.css";
// Calendar
import { CalendarTable } from "./View/Table-components/CalendarTable";
import { SharedViewContext } from "./Context";
import { VIEW } from "./constants/ViewTypes";
import { Header } from "./View/Header";
import { SignModal } from "./View/Authorization";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeViewType = e => {
      this.setState({
        view: e.target.value
      });
    };

    this.nextPeriod = () => {
      this.setState({
        renderedDate: this.state.renderedDate.add(1, this.state.view)
      });
    };

    this.previuosPeriod = () => {
      this.setState({
        renderedDate: this.state.renderedDate.subtract(1, this.state.view)
      });
    };

    this.state = {
      view: VIEW.MONTH,
      renderedDate: moment(),
      changeViewType: this.changeViewType,
      nextPeriod: this.nextPeriod,
      previuosPeriod: this.previuosPeriod,
      showModal: false,
      signType: "Sign in"
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
      showModal: true,
      signType: e.target.value
    });
    e.stopPropagation();
  };

  render() {
    return (
      <SharedViewContext.Provider value={this.state}>
        <Header handleOpen={this.handleOpen} />
        <div className="container">
          <div className="d-flex flex-column  justify-content-center calendar-table">
            <CalendarTable />
          </div>
          {this.state.showModal && (
            <SignModal
              type={this.state.signType}
              handleClose={this.handleClose}
            />
          )}
        </div>
      </SharedViewContext.Provider>
    );
  }
}

export default App;
