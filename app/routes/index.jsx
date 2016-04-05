import React from 'react';
import { Route } from 'react-router';

import AppLayout from 'components/AppLayout';
import HomeContainer from 'containers/Home';
import RouteNotFound from 'components/RouteNotFound';


const routes = ({ children }) => (
  <Route path="/" component={AppLayout}>
    <Route path="/boom" component={HomeContainer} />
    <Route path="*" component={RouteNotFound} />
  </Route>
);

routes.propTypes = {
  children: PropTypes.any,
};

export default routes;
