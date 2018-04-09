// @flow
import { Map } from 'immutable'

import type { Action } from 'state'
import type { HierarchyRecord } from 'state/ducks/hierarchy'

export const EXPAND_ROW = 'app/hierarchy/EXPAND_ROW'
export const SET_HIERARCHIES = 'app/hierarchy/SET_HIERARCHIES'

export type HierarchyAction =
    | { type: 'app/hierarchy/EXPAND_ROW', 
        hierarchyIndex: number, rowIndex: number, destinationState: boolean}
    | { type: 'app/hierarchy/SET_HIERARCHIES',
        hierarchies: Map<number, HierarchyRecord> }

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
        default:
            return state
    }
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

export * from './types'