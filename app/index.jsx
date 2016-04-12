require('es6-promise').polyfill();
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

// routes
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
