import React, { Component } from "react";
import moment from "moment";

class Context extends Component {
  state = {
    view: "month"
  };

  changeViewType = newView => {
    this.setState({
      view: newView
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          view: this.state.view,
          changeViewType: this.changeViewType
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
