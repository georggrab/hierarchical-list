// @flow
import { Map, Record } from 'immutable'
import { combineReducers } from 'redux'

import type { HierarchyRecord, HierarchyAction } from './ducks/hierarchy'
import hierarchyReducer, { rootHierarchyReducer } from './ducks/hierarchy'

import type { LoadStatus, HierarchyLoadAction } from './ducks/fetchHierarchy'

export type State = {
    +hierarchies: Map<number, HierarchyRecord>,
    +loadStatus: LoadStatus,
    +rootHierarchy: number,
}

export type Action =
    | HierarchyAction
    | HierarchyLoadAction

export const initialState: State = {
    hierarchies: Map(),
    rootHierarchy: 0,
    loadStatus: {
        isLoading: false,
        isInvalidated: false,
        dataOrigin: '/public/data.json'
    }
};

export const hierarchyApp = (state: State = initialState, action: Action) => {
    return {
        hierarchies: hierarchyReducer(state.hierarchies, action),
        rootHierarchy: rootHierarchyReducer(state.rootHierarchy, action),
    }
}