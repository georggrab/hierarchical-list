// @flow
import { List, Map, Record, fromJS } from 'immutable'

import type { State } from 'state';
import type { HierarchyRecord } from 'state/ducks/hierarchy';
import { newPayloadRow, newHierarchy } from 'state/ducks/hierarchy';

export const flatHierarchyMap = Map()
  .set(0, newHierarchy({
    headers: List(['foo', 'bar']),
    hierarchyIndex: 0,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'bat'},
          {type: 'string', payload: 'bat'},
        ]),
        expanded: false,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 1,
        expanded: false,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 2,
        expanded: false,
      }),
    ]),
  }))
  .set(1, newHierarchy({
    headers: List(['foo2', 'bar2']),
    hierarchyIndex: 1,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'ohai from depth 2!'},
          {type: 'string', payload: 'ohai from depth 2!'}
        ]),
        expanded: false,
      })
    ]),
  }))

  
export const singleChildHierarchyMap = Map()
  .set(0, newHierarchy({
    headers: List(['foo', 'bar']),
    hierarchyIndex: 0,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'bat'},
          {type: 'string', payload: 'bat'},
        ]),
        expanded: false,
        childId: 1,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 1,
        expanded: false,
      }),
    ]),
  }))
  .set(1, newHierarchy({
    headers: List(['foo2', 'bar2']),
    hierarchyIndex: 1,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'ohai from depth 2!'},
          {type: 'string', payload: 'ohai from depth 2!'}
        ]),
        expanded: false,
      })
    ]),
  }))

export const multiNestedChildHierarchy = Map()
  .set(0, newHierarchy({
    headers: List(['foo', 'bar']),
    hierarchyIndex: 0,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'bat'},
          {type: 'string', payload: 'bat'},
        ]),
        expanded: false,
        childId: 1,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 1,
        expanded: false,
      }),
    ]),
  }))
  .set(1, newHierarchy({
    headers: List(['foo', 'bar']),
    hierarchyIndex: 1,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'bat'},
          {type: 'string', payload: 'bat'},
        ]),
        expanded: false,
        childId: 2,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 1,
        childId: 3,
        expanded: false,
      }),
    ]),
  }))
  .set(2, newHierarchy({
    headers: List(['foo', 'bar']),
    hierarchyIndex: 2,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'bat'},
          {type: 'string', payload: 'bat'},
        ]),
        expanded: false,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 1,
        expanded: false,
      }),
    ]),
  }))
  .set(3, newHierarchy({
    headers: List(['foo', 'bar']),
    hierarchyIndex: 3,
    payload: List([
      newPayloadRow({
        rowIndex: 0,
        columns: List([
          {type: 'string', payload: 'bat'},
          {type: 'string', payload: 'bat'},
        ]),
        expanded: false,
      }),
      newPayloadRow({
        columns: List([
          {type: 'string', payload: 'second'},
          {type: 'string', payload: 'third'},
        ]),
        rowIndex: 1,
        expanded: false,
      }),
    ]),
  }))