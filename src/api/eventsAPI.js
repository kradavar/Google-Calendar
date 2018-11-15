class EventAPI {
  static getEvents = () =>
    fetch("http://localhost:3000/events")
      .then(response => response.json())
      .catch(error => error);
}

export default EventAPI;
