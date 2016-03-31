import { UPDATE_TOKEN, CLEAR_TOKEN } from 'constants/ActionTypes';

const initialState = {
  username: 'Donovan',
  authToken: null,
  isAuthenticated: false,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return Object.assign({}, state, {
        authToken: true,
        isAuthenticated: action.token,
      });

    case CLEAR_TOKEN:
      return Object.assign({}, state, {
        authToken: null,
        isAuthenticated: false,
      });

    case 'FETCH_SUCCEEDED':
      return Object.assign({}, state, {
        username: action.json.current_user_url,
      });

    default:
      return state;
  }
};

export default session;
