import React from 'react';
import { Route } from 'react-router';

import AppLayout from 'components/AppLayout';
import HomeContainer from 'containers/Home';
import AdditionalContribution from 'containers/AdditionalContribution';
import RouteNotFound from 'components/RouteNotFound';

import { pathForBoom, pathForAdditionalContribution } from 'routes/paths';

// This is NOT WORKING check app/index.jsx until then

const routes = () => (
  <Route path="/" component={AppLayout}>
    <Route path={pathForBoom()} component={HomeContainer} />
    <Route path={pathForAdditionalContribution()} component={AdditionalContribution} />
    <Route path="*" component={RouteNotFound} />
  </Route>
);


export default routes;
