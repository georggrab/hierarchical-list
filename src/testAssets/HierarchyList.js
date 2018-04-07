import type { Hierarchy } from 'components/HierarchyList'

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