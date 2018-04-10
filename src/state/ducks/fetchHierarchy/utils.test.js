import { List } from "immutable";
import stringify from "json-stable-stringify";

import { jsonToHierarchy } from "./utils";

it("should convert provided hierarchy to map", () => {
  const expected = [
    [
      2,
      {
        headers: List(["c", "d"]),
        hierarchyIndex: 2,
        payload: List([
          {
            rowIndex: 0,
            columns: List([
              { type: "string", payload: "C" },
              { type: "string", payload: "D" },
            ]),
            expanded: false,
            childId: undefined,
          },
        ]),
      },
    ],
    [
      0,
      {
        headers: List(["a", "b"]),
        hierarchyIndex: 0,
        payload: List([
          {
            rowIndex: 0,
            columns: List([
              { type: "string", payload: "A" },
              { type: "string", payload: "B" },
            ]),
            expanded: false,
            childId: 2,
          },
        ]),
      },
    ],
  ];
  const hierarchy = [
    ...jsonToHierarchy([
      {
        data: { a: "A", b: "B" },
        kids: {
          relation: {
            records: [
              {
                data: { c: "C", d: "D" },
                kids: {},
              },
            ],
          },
        },
      },
    ]),
  ];
  expect(stringify(hierarchy)).toEqual(stringify(expected));
});
