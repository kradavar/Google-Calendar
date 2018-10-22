import React from "react";

import { shallow } from "enzyme";
import ViewTypeSwitcher from "../View/Switchers/ViewTypeSwitcher";
import App from "../App";
import CalendarTable from "../View/Table-components/CalendarTable";
import Button from "../View/Switchers/Button";
it("renders three buttons for changing type of view ", () => {
  const wrapper = shallow(<ViewTypeSwitcher />);
  expect(wrapper.find(Button).length).toEqual(3);
});

it("renders name of rendered month", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".current-month").text()).toEqual("October");
});

it("rendering of month class", () => {
  const wrapper = shallow(<CalendarTable view="month" />);
  expect(wrapper.find(".month").exists());
});

it("changes type of view on click", () => {
  const wrapper = shallow(<ViewTypeSwitcher view="month" />);
  expect(
    wrapper
      .find(Button)
      .at(1)
      .props().value
  ).toEqual("week");

  wrapper
    .find(Button)
    .at(1)
    .simulate("click");

  console.log(
    wrapper
      .find(Button)
      .at(1)
      .props().view
  );
});
