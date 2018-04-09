// @flow
import type { RecordOf } from 'immutable'

import { LOAD_STARTED, LOAD_COMPLETE, LOAD_ERROR, LOAD_INVALIDATED, newLoadStatus } from "./types";
import type { LoadStatusRecord, HierarchyLoadAction } from "./types";

export default function reducer(state: LoadStatusRecord = newLoadStatus(), action: HierarchyLoadAction) {
    switch (action.type) {
        case LOAD_STARTED: {
            return state.set('isLoading', true).set('isInvalidated', false)
        }
        case LOAD_COMPLETE: {
            return state.set('isLoading', false).set('isInvalidated', false)
        }
        default:
            return state
    }
}

export const loadStarted = (url: string): HierarchyLoadAction => {
    return { type: LOAD_STARTED, url }
}

export const loadCompleted = (data: any): HierarchyLoadAction => {
    return { type: LOAD_COMPLETE, data }
}

export const loadError = (message: string): HierarchyLoadAction => {
    return { type: LOAD_ERROR, message }
}

export const loadInvalidated = (): HierarchyLoadAction => { 
    return { type: LOAD_INVALIDATED }
}

export * from './types'
export * from './sagas'