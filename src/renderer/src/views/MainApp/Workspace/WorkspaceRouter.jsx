import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RouteContent from './RouteContent';
import NoRouteSelected from './NoRouteSelected';

export default function WorkspaceRouter() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route component={RouteContent} path={`${url}/:routeId`} />
      <Route component={NoRouteSelected} />
    </Switch>
  );
}
