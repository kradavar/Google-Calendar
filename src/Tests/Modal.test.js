import { shallow } from "enzyme";
import React from "react";

import Day from "../components/calendar-table/Cells/Day";
import moment from "moment";

it("renders a modal window", () => {
  const wrapper = shallow(<Day renderedDate={moment()} view="month" />);
  expect(wrapper.find(".modal").exists());
});
