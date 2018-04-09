// @flow
import React from 'react'
import { mount } from 'enzyme';

import Hierarchy from 'containers/Hierarchy';
import { commonTestSetup } from 'commonTest';
import { multiNestedChildHierarchyState } from 'testAssets/HierarchyList';
import { EXPAND_ROW } from 'state/ducks/hierarchy/index';

const { store } = commonTestSetup(multiNestedChildHierarchyState)

it('should dispatch EXPAND_ROW', () => {
    const el = mount(<Hierarchy 
        store={store}/>)
    expect(el.find('.HierarchyList').length).toBe(1);
    el.find('.HierarchyList-RowExpand p')
        .simulate('click')
    expect(store.getActions())
        .toEqual([
            { type: EXPAND_ROW,
              hierarchyIndex: 0,
              rowIndex: 0,
              destinationState: true,
            }
        ])
})