import React from "react";
import CellHeader from "../components/calendar-table/Cells/CellHeader";
import { shallow } from "enzyme";

it("renders a Cell Header info, which contains date ", () => {
  const wrapper = shallow(<CellHeader headerInfo="21" />);
  expect(wrapper.find(".cell-header-info").text()).toEqual("21");
});
