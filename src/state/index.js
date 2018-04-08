// @flow
import { Map, Record } from 'immutable'
import { combineReducers } from 'redux'

import type { HierarchyRecord, HierarchyAction } from './ducks/hierarchy'
import hierarchyReducer, { rootHierarchyReducer } from './ducks/hierarchy'

export type State = {
    +hierarchies: Map<number, HierarchyRecord>,
    +rootHierarchy: number,
}

export type Action =
    | HierarchyAction

export const initialState: State = {
    hierarchies: Map(),
    rootHierarchy: 0,
};

export const hierarchyApp = (state: State = initialState, action: Action) => {
    return {
        hierarchies: hierarchyReducer(state.hierarchies, action),
        rootHierarchy: rootHierarchyReducer(state.rootHierarchy, action),
    }
}