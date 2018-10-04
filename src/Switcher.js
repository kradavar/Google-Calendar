import React, { Component } from 'react';

export default class Switcher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody>
        <tr>
          <td><input type="radio" /></td>
          <td><input type="radio" /></td>
          <td><input type="radio" /></td>
        </tr>
      </tbody>
    );
  };
}