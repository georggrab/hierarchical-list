// @flow
import React from "react";

import { List, Map } from "immutable";

import type {
  HierarchyRowRecord,
  RowExpandCallback,
  HierarchyRecord,
} from "state/ducks/hierarchy";

import "./HierarchyList.css";

export type HierarchyProps = {
  hierarchies: Map<number, HierarchyRecord>,
  rootHierarchy: ?number,
  onRowExpand: RowExpandCallback,
  onRowDelete: (hierarchyIndex: number, rowIndex: number) => void,
};

const createCell = (content: any, index: number | string) => {
  return (
    <p className="cell" key={index}>
      {content}
    </p>
  );
};

const Row = ({
  row,
  hierarchyIndex,
  onRowExpand,
  onRowDelete,
  hierarchies,
}) => {
  return (
    <div>
      <section className="HierarchyList-Row">
        <div className="HierarchyList-RowDelete">
          <p onClick={() => onRowDelete(hierarchyIndex, row.rowIndex)}>
            <span aria-label="Delete Row" role="img">
              x
            </span>
          </p>
        </div>
        <div className="HierarchyList-RowExpand">
          {row.childId != null && (
            <p
              onClick={() =>
                onRowExpand(hierarchyIndex, row.rowIndex, !row.expanded)
              }
              className={row.expanded ? "HierarchyList-RowExpand--down" : ""}
            >
              ▶
            </p>
          )}
        </div>
        {row.columns.map((item, index) => createCell(item.payload, index))}
      </section>
      {row.childId != null &&
        row.expanded && (
          <HierarchyList
            rootHierarchy={row.childId}
            onRowExpand={onRowExpand}
            onRowDelete={onRowDelete}
            hierarchies={hierarchies}
          />
        )}
    </div>
  );
};

const createHeader = (header: List<string>) => {
  return (
    <section className="HierarchyList-Header">{header.map(createCell)}</section>
  );
};

function createRows(rows: List<HierarchyRowRecord>, childProps) {
  return rows.map((row) => (
    <Row {...childProps} row={row} key={row.rowIndex} />
  ));
}

export default function HierarchyList(props: HierarchyProps) {
  const empty = <div className="HierarchyList HierarchyList--empty" />;
  if (props.rootHierarchy == null || props.hierarchies == null) {
    return empty;
  }
  const hierarchy = props.hierarchies.get(props.rootHierarchy);
  if (hierarchy == null) {
    return empty;
  }
  return (
    <div className="HierarchyList">
      {createHeader(hierarchy.headers)}
      {createRows(hierarchy.payload, {
        hierarchyIndex: hierarchy.hierarchyIndex,
        onRowExpand: props.onRowExpand,
        onRowDelete: props.onRowDelete,
        hierarchies: props.hierarchies,
      })}
    </div>
  );
}
