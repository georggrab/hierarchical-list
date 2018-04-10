// @flow
import { takeLatest, put, call } from "redux-saga/effects";
import { Map } from "immutable";

import {
  LOAD_COMPLETE,
  LOAD_STARTED,
  LOAD_ERROR,
  LOAD_INVALIDATED,
} from "./types";
import type { HierarchyLoadAction } from "./types";

import { jsonToHierarchy } from "./utils";
import { SET_HIERARCHIES } from "state/ducks/hierarchy";

const getHierarchy = (url) => {
  return fetch(url, { method: "get" }).then((data) => data.json());
};

function* fetchHierarchy(action: HierarchyLoadAction) {
  try {
    const data = yield call(getHierarchy, action.url);
    yield put({ type: LOAD_COMPLETE, data });
  } catch (e) {
    yield put({ type: LOAD_ERROR, message: e });
  }
}

function* transformHierarchy(action: HierarchyLoadAction) {
  const hierarchies = yield call(jsonToHierarchy, action.data);
  yield put({ type: SET_HIERARCHIES, hierarchies: Map(hierarchies) });
}

// @flow-disable
export function* fetchHierarchySaga() {
  yield takeLatest(LOAD_STARTED, fetchHierarchy);
  yield takeLatest(LOAD_INVALIDATED, fetchHierarchy);
  yield takeLatest(LOAD_COMPLETE, transformHierarchy);
}
