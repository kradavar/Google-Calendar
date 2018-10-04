import React, { Component } from 'react';
import Cell from './Cell';

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 7,
      rows: (this.props.mounthLength / 7),
    }
  }

  chooseTableToCreate() {
    switch (calendarToRender) {
      case 'mounth': this.setState({
        column: 7,
        rows: (this.props.mounthLength / 7)
      });
        break;
      case 'week': this.setState({
        column: 7,
        rows: 1
      });
        break;
      case 'day': this.setState({
        column: 1,
        rows: 1
      });
        break;
      default: break;
    }
  }

  render() {

  }

}
