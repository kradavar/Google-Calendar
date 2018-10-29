import React, { Component } from "react";

export const SharedViewContext = React.createContext({
  view: "month",
  changeViewType: () => {}
});
export class SharedViewProvider extends Component {
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
      <SharedViewContext.Provider
        value={{
          view: this.state.view,
          changeViewType: this.changeViewType
        }}
      >
        {this.props.children}
      </SharedViewContext.Provider>
    );
  }
}
