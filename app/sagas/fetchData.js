import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { get } from 'superagent';
// var request = require('superagent');
// require('isomorphic-fetch');

export function* fetchData(/* action */) {
   try {
      const data = yield call(get, 'https://api.github.com');
      const json = JSON.parse(data.text);
      yield put({
        type: 'FETCH_SUCCEEDED',
        json,
      });
   } catch (error) {
      yield put({
        type: 'FETCH_FAILED',
        error,
      });
   }
}

export default function* watchFetchData() {
  yield* takeEvery('FETCH_REQUESTED', fetchData);
}
