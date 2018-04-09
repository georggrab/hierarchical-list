// @flow
import { Map } from 'immutable'

import type { Action } from 'state'
import type { HierarchyRecord } from 'state/ducks/hierarchy'

export const EXPAND_ROW = 'app/hierarchy/EXPAND_ROW'
export const SET_HIERARCHIES = 'app/hierarchy/SET_HIERARCHIES'
export const EXPAND_ALL = 'app/hierarchy/EXPAND_ALL'
export const COLLAPSE_ALL = 'app/hierarchy/COLLAPSE_ALL'
export const DELETE_ROW = 'app/hierarchy/DELETE_ROW'

export type HierarchyAction =
    | { type: 'app/hierarchy/EXPAND_ROW', 
        hierarchyIndex: number, rowIndex: number, destinationState: boolean}
    | { type: 'app/hierarchy/SET_HIERARCHIES',
        hierarchies: Map<number, HierarchyRecord> }
    | { type: 'app/hierarchy/EXPAND_ALL' }
    | { type: 'app/hierarchy/COLLAPSE_ALL' }
    | { type: 'app/hierarchy/DELETE_ROW', hierarchyIndex: number, rowIndex: number }

export default function reducer(state: Map<number, HierarchyRecord> = Map(), action: Action) {
    switch (action.type) {
        case EXPAND_ROW: { 
            const hierarchy = state.get(action.hierarchyIndex);
            if (hierarchy != null) {
                const newList = hierarchy.payload.setIn([action.rowIndex, 'expanded'], action.destinationState);
                return state.setIn([action.hierarchyIndex, 'payload'], newList)
            }
        }
        case SET_HIERARCHIES: {
            return action.hierarchies;
        }
        case EXPAND_ALL: {
            return toggleHierarchy(state, true);
        }
        case COLLAPSE_ALL: {
            return toggleHierarchy(state, false);
        }
        default:
            return state
    }
}

function toggleHierarchy(state: Map<number, HierarchyRecord>, to: boolean): Map<number, HierarchyRecord> {
    return state.map((hierarchy) => {
        return hierarchy.set('payload', hierarchy.payload.map((row) => {
            return row.set('expanded', to);
        }));
    });
}

export function rootHierarchyReducer(state: number, action: Action) {
    switch (action.type) {
        default:
            return state
    }
}

export const expandRow = (hierarchyIndex: number, rowIndex: number, destinationState: boolean): HierarchyAction => {
    return {
        type: EXPAND_ROW,
        hierarchyIndex,
        rowIndex,
        destinationState
    }
}

export const deleteRow = (hierarchyIndex: number, rowIndex: number) => {
    return {  
        type: DELETE_ROW,
        hierarchyIndex,
        rowIndex,
    }
}

export const expandAll = () => {
    return { type: EXPAND_ALL }
}

export const collapseAll = () => {
    return { type: COLLAPSE_ALL }
}

export * from './types'