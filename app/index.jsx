import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
// routes
import { Router, hashHistory } from 'react-router';
// import routes from 'routes';
import { Route } from 'react-router';

import AppLayout from 'components/AppLayout';
import HomeContainer from 'containers/Home';
import AdditionalContribution from 'containers/AdditionalContribution';
import RouteNotFound from 'components/RouteNotFound';

import { pathForBoom, pathForAdditionalContribution } from 'routes/paths';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <Route path="{pathForBoom()}" component={HomeContainer} />
        <Route path={pathForAdditionalContribution()} component={AdditionalContribution} />
        <Route path="*" component={RouteNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
