import { shallow } from "enzyme";
import React from "react";

import Week from "../components/Table-components/Week";
import moment from "moment";

it("renders one week, which includes 7 days on week view type", () => {
  const wrapper = shallow(<Week renderedDate={moment()} view="week" />);
  expect(wrapper.find(".week").children()).toHaveLength(7);
});
