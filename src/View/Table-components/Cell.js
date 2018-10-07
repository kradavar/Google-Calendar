import React, { Component } from "react";
import CellHeader from "./CellHeader.js";

export default class Cell extends Component {
  render() {
    return (
      <td className="cell">
        <CellHeader dayOfMonth={this.props.dayOfMonth} />
      </td>
    );
  }
}
