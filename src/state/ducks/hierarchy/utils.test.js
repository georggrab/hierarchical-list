// @flow
import { List, Map, Record, fromJS } from 'immutable'
import { deleteHierarchies, withoutRow } from './utils';
import { multiNestedChildHierarchyState } from 'testAssets/state';
import { multiNestedChildHierarchy } from 'testAssets/HierarchyList';

it('deleteHierarchies should delete Hierarchies recursively', () => {
    const state = multiNestedChildHierarchy;
    expect([...state.keys()].length).toBe(4);
    const newState = deleteHierarchies(multiNestedChildHierarchyState, multiNestedChildHierarchy.get(0));
    expect([...state.keys()].length).toBe(1);
})

it('withoutRow should remove row from state', () => {
    const state = multiNestedChildHierarchy;
    const newState = withoutRow(multiNestedChildHierarchy, 0, 0);
    expect(newState.getIn([0, 'payload', 0])).toBe(null);
})