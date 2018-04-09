// @flow
import { Record } from "immutable"
import type { RecordFactory, RecordOf } from 'immutable'

export const LOAD_STARTED = 'app/fetchHierarchy/LOAD_STARTED'
export const LOAD_COMPLETE = 'app/fetchHierarchy/LOAD_COMPLETE'
export const LOAD_ERROR = 'app/fetchHierarchy/LOAD_ERROR'
export const LOAD_INVALIDATED = 'app/fetchHierarchy/LOAD_INVALIDATED'

export type HierarchyLoadAction = 
    | { type: 'app/fetchHierarchy/LOAD_STARTED', url: string }
    | { type: 'app/fetchHierarchy/LOAD_COMPLETE', data: any }
    | { type: 'app/fetchHierarchy/LOAD_ERROR', message: string }
    | { type: 'app/fetchHierarchy/LOAD_INVALIDATED' }

type LoadStatus = {
    isLoading: boolean,
    isInvalidated: boolean,
    dataOrigin: string,
}

export type LoadStatusRecord = RecordOf<LoadStatus>
export const newLoadStatus: RecordFactory<LoadStatus> = Record({
    isLoading: false, isInvalidated: false, dataOrigin: ''
})