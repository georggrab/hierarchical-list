// @flow
import type { Hierarchy } from "../components/HierarchyList";

export const flatHierarchy: Hierarchy = {
    headers: ['First', 'Second'],
    payload: [
      {
        columns: [
          {type: 'string', payload: 'First Row First Column'},
          {type: 'string', payload: 'First Row Second Column'},
        ]
      },
      {
        columns: [
          {type: 'string', payload: 'Second Row First Column'},
          {type: 'string', payload: 'Second Row Second Column'},
        ]
      },
      {
        columns: [
          {type: 'string', payload: 'Third Row First Column'},
          {type: 'string', payload: 'Third Row Second Column'},
        ]
      },
    ]
}

export const singleChildHierarchy: Hierarchy = {
  headers: ['foo', 'bar'],
  payload: [
    {
      columns: [
        {type: 'string', payload: 'bat'},
        {type: 'string', payload: 'bat'},
      ],
      children: {
        headers: ['foo2', 'bar2'],
        payload: [
          {
            columns: [
              {type: 'string', payload: 'ohai from depth 2!'},
              {type: 'string', payload: 'ohai from depth 2!'}
            ]
          }
        ]
      } 
    },
    {
      columns: [
        {type: 'string', payload: 'second'},
        {type: 'string', payload: 'third'},
      ]
    }
  ]
}