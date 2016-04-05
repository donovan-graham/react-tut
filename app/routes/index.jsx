import React from 'react';
import { Route } from 'react-router';

import AppLayout from 'components/AppLayout';
import HomeContainer from 'containers/Home';
import AdditionalContribution from 'containers/AdditionalContribution';
import RouteNotFound from 'components/RouteNotFound';

/// This is NOT WORKING check app/index.jsx until then

const routes = () => (
  <Route path="/" component={AppLayout}>
    <Route path="/boom" component={HomeContainer} />
    <Route path="/additional-contribution" component={AdditionalContribution} />
    <Route path="*" component={RouteNotFound} />
  </Route>
);


export default routes;
