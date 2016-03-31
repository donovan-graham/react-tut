import {
  UPDATE_TOKEN, CLEAR_TOKEN,
  FETCH_REQUESTED, FETCH_SUCCEEDED, FETCH_FAILED
} from 'constants/ActionTypes';

const initialState = {
  username: 'Donovan',
  authToken: null,
  isAuthenticated: false,

  // async
  isLoading: false,
  data: null,
  error: null,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        authToken: true,
        isAuthenticated: action.token,
      };

    case CLEAR_TOKEN:
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
      };

    case FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };

    case FETCH_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null,
        username: action.data.current_user_url,
      };

    case FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};

export default session;
