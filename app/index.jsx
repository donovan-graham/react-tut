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

// debugger;

const fakeServer = new Pretender();
window.fakeServer = fakeServer;

fakeServer.get('https://api.github.com', () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = {
    current_user_url: 'Yo Donny Gee',
    username: 'Yo yo yo',
  };
  return [200, headers, JSON.stringify(response)];
});

fakeServer.handledRequest = (verb, path) => {
  const _verb = verb.toLowerCase();
  console.log(`** AJAX ${_verb} ${path}`);
};

fakeServer.unhandledRequest = (verb, path, request) => {
  console.log(`Eh? unhandled request: ${verb} ${path}`, request);
};





ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
