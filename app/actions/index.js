import {
  UPDATE_TOKEN, CLEAR_TOKEN,
  FETCH_REQUESTED, FETCH_SUCCEEDED, FETCH_FAILED,
} from 'constants/ActionTypes';

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});


export const fetchSucceeded = (data) => ({
  type: FETCH_SUCCEEDED,
  data: JSON.parse(data.text),
});

export const fetchFailed = (error) => ({
  type: FETCH_FAILED,
  error,
});


// export function fetchRequested() {
//   return function (dispatch, getState) {
//     if (getState().session.isLoading) {
//       return;
//     }
//     dispatch({ type: FETCH_REQUESTED });
//   };
// }
