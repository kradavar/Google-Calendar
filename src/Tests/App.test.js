import React from "react";
import { shallow } from "enzyme";
import ViewTypeSwitcher from "../components/ViewTypeSwitcher";
import App from "../App/App";
import CalendarTable from "../components/calendar-table/cells/CalendarTable /CalendarTable";
import Button from "../components/buttons/Button/Button";
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

it("changes type of view on state changing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ViewTypeSwitcher).props().view).toEqual("month");
  wrapper.setState({ view: "week" });
  expect(wrapper.find(ViewTypeSwitcher).props().view).toEqual("week");
});
