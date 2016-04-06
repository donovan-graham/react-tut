import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import session from 'reducers/session';
import additionalContribution from 'reducers/additionalContribution';


const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  session,
  additionalContribution,
});

export default rootReducer;
