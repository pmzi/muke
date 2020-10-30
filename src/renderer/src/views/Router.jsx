import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import MainApp from './MainApp';
import Inspect from './Inspect';
import OnDemand from './OnDemand';

export default function Router() {
  return (
    <Switch>
      <Route path="/inspect/:serverId" component={Inspect} />
      <Route path="/on-demand/:requestId" component={OnDemand} />
      <Route component={MainApp} />
    </Switch>
  );
}
