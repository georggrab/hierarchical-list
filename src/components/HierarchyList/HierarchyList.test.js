import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
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

it('produces a second Hierarchy when children are supplies', () => {
  const hList = shallow(<HierarchyList hierarchy={singleChildHierarchy} />);
  expect(hList.find('.HierarchyList').length).toBe(2);
});