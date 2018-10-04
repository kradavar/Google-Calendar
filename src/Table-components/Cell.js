import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        <td className="cell">
            <header>
                <div className="day-of-week">
                    {this.props.dayOfWeek}
                </div>
                <div className="date">
                    {this.props.date}
                </div>
            </header>
        </td>
    };
}