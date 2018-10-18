import React from "react";

import { shallow } from "enzyme";
import ViewTypeSwitcher from "../View/Switchers/ViewTypeSwitcher";

it("renders three buttons for changing type of view ", () => {
  const wrapper = shallow(<ViewTypeSwitcher view="month" />);
  expect(wrapper.find("div").children().length).toEqual(3);
});
