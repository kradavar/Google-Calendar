import { shallow } from "enzyme";
import React from "react";

import Month from "../components/Table-components/Month";
import moment from "moment";

it("renders one month, which includes 5 weeks on month view type with header", () => {
  const wrapper = shallow(<Month renderedDate={moment()} view="month" />);
  expect(wrapper.find(".month").children().length).toEqual(6);
});
