// @flow
import * as I from "immutable";

import type { HierarchyRecord, HierarchyPayload } from "state/ducks/hierarchy";
import { newPayloadRow, newHierarchy } from "state/ducks/hierarchy";

/**
 * Get cantor pairing of two natural numbers
 * @param {*} n first natural number
 * @param {*} k second natural number
 * @returns a unique natural number from the two input numbers
 */
function getCantorPairing(n: number, k: number) {
  return 0.5 * (n + k) * (n + k + 1) + k;
}

function getHeaders(record: any): I.List<string> {
  return record.length > 0 ? I.List(Object.keys(record[0].data)) : I.List();
}

function getPayload(data: [string, mixed][]): I.List<HierarchyPayload> {
  return I.List(
    data.map((payload) => {
      return { type: "string", payload: payload[1] };
    })
  );
}

function getChildRecord(baseRecord: any): ?any {
  if (baseRecord.kids == null) {
    return null;
  }
  const relation = Object.getOwnPropertyNames(baseRecord.kids);
  if (relation.length != 1) {
    return null;
  }
  return baseRecord.kids[relation].records;
}

function makeHierarchy(
  record: any,
  hierarchyIndex: number,
  map: Map<number, HierarchyRecord>
): number {
  const payload = [];
  record.forEach((element, rowIndex) => {
    const row = newPayloadRow({
      columns: I.List(getPayload(Object.entries(element.data))),
      expanded: false,
      rowIndex,
    });
    const childRecord = getChildRecord(element);
    if (childRecord) {
      payload.push(
        row.set(
          "childId",
          makeHierarchy(
            childRecord,
            getCantorPairing(hierarchyIndex, rowIndex + 1),
            map
          )
        )
      );
    } else {
      payload.push(row);
    }
  });
  map.set(
    hierarchyIndex,
    newHierarchy({
      headers: getHeaders(record),
      hierarchyIndex,
      payload: I.List(payload),
    })
  );
  return hierarchyIndex;
}

export function jsonToHierarchy(json: any): Map<number, HierarchyRecord> {
  const map = new Map();
  makeHierarchy(json, 0, map);
  return map;
}
