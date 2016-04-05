import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import session from 'reducers/session';
import additionalContribution from 'reducers/additionalContribution';

const rootReducer = combineReducers({
  form: formReducer,
  session,
  additionalContribution,
});

export default rootReducer;
