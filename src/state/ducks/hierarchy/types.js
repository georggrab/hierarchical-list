// @flow
import { List, Record } from "immutable";
import type { RecordOf, RecordFactory } from "immutable";

export type HierarchyPayload = {
  type: "string" | "number" | "boolean" | "date",
  payload: any,
};

type HierarchyRow = {
  columns: List<HierarchyPayload>,
  rowIndex: number,
  childId?: number,
  expanded: boolean,
};

export type HierarchyRowRecord = RecordOf<HierarchyRow>;
export const newPayloadRow: RecordFactory<HierarchyRow> = Record({
  columns: List(),
  expanded: false,
  rowIndex: -1,
  childId: undefined,
});

type Hierarchy = {
  headers: List<string>,
  payload: List<HierarchyRowRecord>,
  hierarchyIndex: number,
};

export type HierarchyRecord = RecordOf<Hierarchy>;
export const newHierarchy: RecordFactory<Hierarchy> = Record({
  headers: List(),
  payload: List(),
  hierarchyIndex: -1,
});

export type RowExpandCallback = (
  hierarchyIndex: number,
  rowIndex: number,
  state: boolean
) => void;
