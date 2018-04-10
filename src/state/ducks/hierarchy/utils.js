// @flow
import type { Map } from "immutable";

import type { HierarchyRowRecord } from ".";
import { HierarchyRecord } from "state/ducks/hierarchy";

const getChildHierarchyHelper = (
  state: Map<number, HierarchyRecord>,
  index: number,
  acc: number[]
): ?number => {
  const hierarchy = state.get(index);
  if (hierarchy == null) {
    return null;
  }
  hierarchy.payload.forEach((row) => {
    getChildHierarchyHelper(state, row.childId, acc);
  });
  acc.push(index);
};

export const getRow = (
  hierarchy: HierarchyRecord,
  rowIndex: number
): ?HierarchyRowRecord => {
  return hierarchy.payload.find((row) => row.rowIndex === rowIndex);
};

export const getChildHierarchies = (
  state: Map<number, HierarchyRecord>,
  index: number
) => {
  const accumulator = [];
  getChildHierarchyHelper(state, index, accumulator);
  return accumulator.slice(0, -1);
};

export const deleteChildHierarchies = (
  state: Map<number, HierarchyRecord>,
  index: number
): Map<number, HierarchyRecord> => {
  return state.deleteAll(getChildHierarchies(state, index));
};

export const deleteHierarchyIfRowsEmpty = (
  state: Map<number, HierarchyRecord>,
  hierarchyIndex: number
): Map<number, HierarchyRecord> => {
  const hierarchy = state.get(hierarchyIndex);
  if (hierarchy.payload.size === 0) {
    return state.delete(hierarchyIndex);
  } else {
    return state;
  }
};

export const updateExpansionAndChildIds = (
  state: Map<number, HierarchyRecord>
) => {
  return state.map((hierarchy) => {
    return hierarchy.set(
      "payload",
      hierarchy.payload.map((row) => {
        if (state.get(row.childId) == null) {
          return row.set("expanded", false).set("childId", null);
        } else {
          return row;
        }
      })
    );
  });
};

export const withoutRow = (
  state: Map<number, HierarchyRowRecord>,
  hierarchyIndex: number,
  rowIndex: number
): State => {
  const hierarchy = state.get(hierarchyIndex);
  const row = getRow(hierarchy, rowIndex);
  const newState = deleteChildHierarchies(state, row.childId);
  return newState.setIn(
    [hierarchyIndex, "payload"],
    hierarchy.payload.filter((row) => rowIndex !== row.rowIndex)
  );
};
