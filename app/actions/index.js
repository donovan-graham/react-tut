import * as types from 'constants/ActionTypes';

export const updateToken = (token) => ({
  type: types.UPDATE_TOKEN,
  token,
});

export const clearToken = () => ({
  type: types.CLEAR_TOKEN,
});
