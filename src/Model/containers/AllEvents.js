const getRenderedDateEvents = (events, date) => {
  return events.filter(event => event.start === date);
};

const mapStateToProps = state => {
  return {
    events: getRenderedDateEvents(state.events, state.renderedDate)
  };
};
