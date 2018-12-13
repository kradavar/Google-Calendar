import { shallow } from "enzyme";
import React from "react";

import Day from "../components/calendar-table/Day";
import moment from "moment";

it("renders 24 hours for day", () => {
  const wrapper = shallow(<Day renderedDate={moment()} view="day" />);
  expect(wrapper.find(".day-flex").children().length).toEqual(24);
});
