import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td className="cell">
                <div className="day-of-week">
                    {this.props.dayOfWeek}
                </div>
                <div className="date">
                    {this.props.date}
                </div>
            </td>
        );
    };
}