import React, { Component } from "react";
import moment from "moment";
import "./Styles/App.css";
// Calendar
import { CalendarTable } from "./View/Table-components/CalendarTable";
// Switchers
import { ViewTypeSwitcher } from "./View/Switchers/ViewTypeSwitcher";
import { Button } from "./View/Switchers/Button";
import { formatDate } from "./Model/getRenderedDateInfo";
import { DATE_FORMATS } from "./constants/DateFormats";
import { SharedViewContext } from "./Context";
import { VIEW } from "./constants/ViewTypes";
import { Header } from "./View/Header";

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
      previuosPeriod: this.previuosPeriod
    };
  }

  render() {
    return (
      <SharedViewContext.Provider value={this.state}>
        <SharedViewContext.Consumer>
          {({ renderedDate, previuosPeriod, nextPeriod }) => (
            <React.Fragment>
              <Header />
              <div className="container">
                <div className="d-flex flex-column  justify-content-center calendar-table">
                  <CalendarTable />
                </div>
              </div>
            </React.Fragment>
          )}
        </SharedViewContext.Consumer>
      </SharedViewContext.Provider>
    );
  }
}

export default App;
