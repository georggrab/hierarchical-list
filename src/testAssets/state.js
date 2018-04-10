// @flow
import type { State } from "state";
import { flatHierarchyMap, multiNestedChildHierarchy } from "./HierarchyList";
import { newLoadStatus } from "state/ducks/fetchHierarchy";

const loadStatus = newLoadStatus();

export const flatHierarchyState: State = {
  hierarchies: flatHierarchyMap,
  rootHierarchy: 0,
  loadStatus,
};

export const multiNestedChildHierarchyState: State = {
  rootHierarchy: 0,
  hierarchies: multiNestedChildHierarchy,
  loadStatus,
};
