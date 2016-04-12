// import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
// import { get } from 'superagent';

import { LOCATION_CHANGE } from 'react-router-redux';


// import { fetchSucceeded, fetchFailed } from 'actions';

export function* preloadData(action) {
  console.log("act:", action.payload);
  if (action.payload.action !== 'PUSH') {
    yield true;
  }

  switch (action.payload.pathname) {
    case '/boom22':
      console.log('you entered route: /boom22');
      break;
    case '/additional-contribution':
      console.log('you entered route: /additional-contribution');
      break;
    default:
      break;
  }

  yield true;

  // try {
  //   const data = yield call(get, 'https://api.github.com');
  //   yield put(fetchSucceeded(data));
  // } catch (error) {
  //   yield put(fetchFailed(error));
  // }
}

export default function* watchLocationChange() {
  yield* takeLatest(LOCATION_CHANGE, preloadData);
}

