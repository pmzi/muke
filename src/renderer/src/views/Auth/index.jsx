import { Switch, Route, useRouteMatch } from 'react-router-dom';
import React from 'react';

import Login from './Login';
import Register from './Register';

export default function Auth() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${path}/register`} component={Register} />
    </Switch>
  );
}
