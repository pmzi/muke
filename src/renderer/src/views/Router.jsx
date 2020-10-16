import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Workspace from './Workspace';

export default function Router() {
  return (
    <Switch>
      <Route path="/workspace/:workspace" component={Workspace} />
      <Route component={() => <div>Nothing to show</div>} />
    </Switch>
  );
}
