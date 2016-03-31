import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { get } from 'superagent';

import { FETCH_REQUESTED } from 'constants/ActionTypes';
import { fetchSucceeded, fetchFailed } from 'actions';

export function* fetchData(/* action */) {
  try {
    const data = yield call(get, 'https://api.github.com');
    yield put(fetchSucceeded(data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export default function* watchFetchData() {
  yield* takeEvery(FETCH_REQUESTED, fetchData);
}
