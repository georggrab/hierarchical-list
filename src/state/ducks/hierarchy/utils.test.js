// @flow
import { List, Map, Record, fromJS } from 'immutable'
import { deleteHierarchies, withoutRow, getRow, deleteHierarchyIfRowsEmpty } from './utils';
import { multiNestedChildHierarchy } from 'testAssets/HierarchyList';
import { getChildHierarchies } from './utils';

it('getChildHierarchy gets Child IDs', () => {
    const state = multiNestedChildHierarchy;
    expect(getChildHierarchies(state, 0)).toEqual([2, 3, 1])
    expect(getChildHierarchies(state, 2)).toEqual([])
})

it('getRow should get correct rowIndex', () => {
    const state = multiNestedChildHierarchy;
    expect(getRow(state.get(0), 0))
        .toBe(state.get(0).payload.get(0));
    const newState = withoutRow(state, 0, 0);
    expect(getRow(newState.get(0), 1))
        .toBe(newState.get(0).payload.get(0));
});

it('deleteHierarchies should delete Hierarchies recursively', () => {
    const state = multiNestedChildHierarchy;
    expect([...state.keys()].length).toBe(4);
    const newState = deleteHierarchies(multiNestedChildHierarchy, 0);
    expect([...newState.keys()].length).toBe(1);
})

it('deleteHierarchyIfRowsEmpty does not delete hierarchy if rows are there', () => {
    const state = multiNestedChildHierarchy;
    expect(deleteHierarchyIfRowsEmpty(state, 0)).toBe(state);
});

it('deleteHierarchyIfRowsEmpty deletes hierarchy if rows empty', () => {
    const state = multiNestedChildHierarchy;
    const state2 = withoutRow(state, 0, 0);
    const state3 = withoutRow(state2, 0, 1);
    expect(deleteHierarchyIfRowsEmpty(state3, 0).get(0)).toBe(undefined);
})

it('withoutRow should remove row from state', () => {
    const state = multiNestedChildHierarchy;
    const newState = withoutRow(multiNestedChildHierarchy, 0, 1);
    expect(newState.getIn([0, 'payload', 1])).toBe(undefined);
})