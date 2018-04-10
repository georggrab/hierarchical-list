// @flow
import { Map, Record } from "immutable";
import { combineReducers } from "redux";

import type { HierarchyRecord, HierarchyAction } from "./ducks/hierarchy";
import hierarchyReducer, { rootHierarchyReducer } from "./ducks/hierarchy";

import type {
  LoadStatusRecord,
  HierarchyLoadAction,
} from "./ducks/fetchHierarchy";
import loadStatusReducer, { newLoadStatus } from "./ducks/fetchHierarchy";

export type State = {
  +hierarchies: Map<number, HierarchyRecord>,
  +loadStatus: LoadStatusRecord,
  +rootHierarchy: number,
};

export type Action = HierarchyAction | HierarchyLoadAction;

export const initialState: State = {
  hierarchies: Map(),
  rootHierarchy: 0,
  loadStatus: newLoadStatus({
    isLoading: false,
    isInvalidated: false,
    dataOrigin: "/data-1.json",
  }),
};

export const hierarchyApp = (state: State = initialState, action: Action) => {
  return {
    hierarchies: hierarchyReducer(state.hierarchies, action),
    rootHierarchy: rootHierarchyReducer(state.rootHierarchy, action),
    loadStatus: loadStatusReducer(state.loadStatus, action),
  };
};
