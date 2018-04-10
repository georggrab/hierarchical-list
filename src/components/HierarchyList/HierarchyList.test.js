// @flow
import React from "react";
import ReactDOM from "react-dom";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HierarchyList from ".";
import {
  flatHierarchyMap,
  singleChildHierarchyMap,
} from "testAssets/HierarchyList";

Enzyme.configure({ adapter: new Adapter() });

it("renders flat hierarchy list without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HierarchyList rootHierarchy={0} hierarchies={flatHierarchyMap} />,
    div
  );
});

it("displays empty div when hierarchy is missing", () => {
  const list = shallow(<HierarchyList />);
  expect(list.find(".HierarchyList--empty").length).toBe(1);
});

it("produces correct amount of rows", () => {
  const hList = mount(
    <HierarchyList
      rootHierarchy={0}
      onRowExpand={() => {}}
      hierarchies={flatHierarchyMap}
    />
  );
  expect(hList.find(".HierarchyList-Row").length).toBe(3);
});

it("produces a expand arrow when children are supplied", () => {
  const hListRoot = mount(
    <HierarchyList rootHierarchy={0} hierarchies={singleChildHierarchyMap} />
  );
  expect(hListRoot.find(".HierarchyList-RowExpand p").length).toBe(1);
});

it("fires rowExpand callback when expand button is clicked", () => {
  let rowExpandClicked = false;
  const hListRoot = mount(
    <HierarchyList
      rootHierarchy={0}
      onRowExpand={() => {
        rowExpandClicked = true;
      }}
      hierarchies={singleChildHierarchyMap}
    />
  );
  const hListChild = mount(
    <HierarchyList
      onRowExpand={() => {}}
      hierarchies={singleChildHierarchyMap}
      rootHierarchy={1}
    />
  );
  hListRoot.find(".HierarchyList-RowExpand p").simulate("click");
  expect(rowExpandClicked).toBe(true);
});

it("asd", () => {});
