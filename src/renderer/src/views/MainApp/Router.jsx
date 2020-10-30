import React from 'react';

import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import NoWorkspaceSelected from './NoWorkspaceSelected';
import Workspace from './Workspace';

export default function Router() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}workspace/:workspace`} component={Workspace} />
      <Route component={NoWorkspaceSelected} />
    </Switch>
  );
}
