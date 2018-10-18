import React from "react";
import CellHeader from "../View/Table-components/Cells/CellHeader";
import { shallow } from "enzyme";
import moment from "moment";

it("renders", () => {
  const wrapper = shallow(<CellHeader headerInfo="21" />);
  expect(wrapper.find(".cell-header-info").text()).toEqual("21");
});
