import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import MatchedRoute from './MatchedRoute';
import NoRequestSelected from './NoRequestSelected';

export default function InspectRouter() {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route component={MatchedRoute} path={`${url}/request/:requestId`} />
      <Route component={NoRequestSelected} />
    </Switch>
  );
}
