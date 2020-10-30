import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import NoWorkspaceSelected from './NoWorkspaceSelected';
import Workspace from './Workspace';

export default function Router() {
  return (
    <Switch>
      <Route path="/workspace/:workspace" component={Workspace} />
      <Route path="/inspect/:serverId" component={() => <h1>Hey</h1>} />
      <Route component={NoWorkspaceSelected} />
    </Switch>
  );
}
