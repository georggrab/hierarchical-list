// @flow
import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import Hierarchy from "containers/Hierarchy";
import { commonTestSetup } from "commonTest";
import { multiNestedChildHierarchyState } from "testAssets/state";
import { EXPAND_ROW, DELETE_ROW } from "state/ducks/hierarchy/index";

it("should dispatch EXPAND_ROW", () => {
  const { store } = commonTestSetup(multiNestedChildHierarchyState);
  const el = mount(<Hierarchy store={store} />);
  expect(el.find(".HierarchyList").length).toBe(1);
  el.find(".HierarchyList-RowExpand p").simulate("click");
  expect(store.getActions()).toEqual([
    {
      type: EXPAND_ROW,
      hierarchyIndex: 0,
      rowIndex: 0,
      destinationState: true,
    },
  ]);
});

it("should dispatch DELETE_ROW", () => {
  const { store } = commonTestSetup(multiNestedChildHierarchyState);
  const el = mount(<Hierarchy store={store} />);

  el
    .find(".HierarchyList-RowDelete p")
    .first()
    .simulate("click");
  expect(store.getActions()).toEqual([
    {
      type: DELETE_ROW,
      hierarchyIndex: 0,
      rowIndex: 0,
    },
  ]);
});
