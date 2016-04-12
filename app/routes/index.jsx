import React from 'react';
import { Route } from 'react-router';

import AppLayout from 'components/AppLayout';
import HomeContainer from 'containers/Home';
import AdditionalContribution from 'containers/AdditionalContribution';
import RouteNotFound from 'components/RouteNotFound';

import { pathForBoom, pathForAdditionalContribution } from 'routes/paths';

const requireJWT = (nextState, replace) => {
  const query = nextState.location.query;
  const token = query && query.token;

  if (token) {
    console.log('Token:', token);

    const newQuery = Object.assign({}, query);
    delete newQuery.token;
    replace({
      pathname: nextState.location.pathname,
      query: newQuery,
    });
  }
};

const routes = (
  <Route path="/" component={AppLayout} onEnter={requireJWT}>
    <Route path={pathForBoom()} component={HomeContainer} />
    <Route path={pathForAdditionalContribution()} component={AdditionalContribution} />
    <Route path="*" component={RouteNotFound} />
  </Route>
);

export default routes;
