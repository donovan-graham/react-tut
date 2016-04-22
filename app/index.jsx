require('es6-promise').polyfill();
import 'babel-polyfill';

// const encodeMetaConfig = (config) => encodeURIComponent(JSON.stringify(config));
// const output = encodeMetaConfig({
//   BFF_URL: 'http://api/v1/',
//   ENV: 'production',
//   NEW_RELIC: '12345',
//   GOOGLE_ANALYTIC: '98765',
// });
// console.log('output:', output);


const getMetaConfig = () => {
  const metas = document.getElementsByTagName('meta');
  // const content = metas.filter((meta) =>
  //   meta.getAttribute('name') === 'app/config'
  // ).map(meta =>
  //   meta.getAttribute('content')
  // );

  // if (content) {
  //   const config = JSON.parse(decodeURIComponent(content));
  //   return config;
  // }

  let i;
  for (i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === 'app/config') {
      const content = metas[i].getAttribute('content');
      const config = JSON.parse(decodeURIComponent(content));
      return config;
    }
  }
  return { error: 'config not found' };
};

const config = getMetaConfig();
console.log('meta tag config', config);

console.log('window global config:', window.AGConfig);


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
