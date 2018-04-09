// @flow
import React from 'react';
import { mount } from 'enzyme';

import HierarchySettings from './HierarchySettings';
import { multiNestedChildHierarchyState } from 'testAssets/state';
import { commonTestSetup } from 'commonTest';
import { EXPAND_ALL } from 'state/ducks/hierarchy/index';
import { COLLAPSE_ALL } from '../state/ducks/hierarchy';


it('should dispatch expand', () => {
    const { store } = commonTestSetup(multiNestedChildHierarchyState)
    const comp = mount(<HierarchySettings store={store} />);
    comp.find('.expand').simulate('click');

    const actions = store.getActions();
    expect(actions[actions.length - 1]).toEqual({
        type: EXPAND_ALL
    });
})

it('should dispatch collapse', () => {
    const { store } = commonTestSetup(multiNestedChildHierarchyState)
    const comp = mount(<HierarchySettings store={store} />);
    comp.find('.collapse').simulate('click');

    const actions = store.getActions();
    expect(actions[actions.length - 1]).toEqual({
        type: COLLAPSE_ALL,
    });
})