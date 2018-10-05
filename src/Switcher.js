import React, { Component } from 'react';

export default class Switcher extends Component {
  constructor(props) {
    super(props);
  }

  handleRadioChange() {

  }

  render() {
    return (
      <tbody>
        <tr >
          <td><input type="radio" value={"month"} >{"month"}</input></td>
          <td><input type="radio" value={"week"}>{"week"}</input></td>
          <td><input type="radio" value={"day"}>{"day"}</input></td>
        </tr>
      </tbody>
    );
  };
}