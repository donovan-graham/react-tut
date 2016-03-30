import { combineReducers } from 'redux';
import session from 'reducers/session';

const rootReducer = combineReducers({
  session,
});

export default rootReducer;
