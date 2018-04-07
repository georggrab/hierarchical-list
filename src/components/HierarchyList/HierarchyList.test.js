import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HierarchyList from '.';
import { flatHierarchy, singleChildHierarchy } from 'testAssets/HierarchyList';

Enzyme.configure({ adapter: new Adapter() });

it('renders flat hierarchy list without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HierarchyList hierarchy={flatHierarchy} />, div);
});

it('fails if hierarchy prop is missing', () => {
  const div = document.createElement('div');
  expect(() => {
    ReactDOM.render(<HierarchyList />, div);
  }).toThrow();
});

it('produces correct amount of rows', () => {
  const hList = shallow(<HierarchyList hierarchy={flatHierarchy} />);
  expect(hList.find('section').length).toBe(4);
});

it('produces a expand arrow when children are supplied', () => {
  const hListRoot = mount(<HierarchyList hierarchy={singleChildHierarchy} />);
  expect(hListRoot.find('.HierarchyList-RowExpand p').length).toBe(1);
});

it('produces a second HierarchyList when Expand Button is clicked', () => {
  const hListRoot = mount(<HierarchyList hierarchy={singleChildHierarchy} />);
  const hListChild = mount(<HierarchyList hierarchy={singleChildHierarchy.payload[0].children} />);
  hListRoot.find('.HierarchyList-RowExpand p').simulate('click');
  expect(hListRoot.find(HierarchyList).last().html())
    .toEqual(hListChild.html());
});