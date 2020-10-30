import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import MainApp from './MainApp';
import Inspect from './Inspect';

export default function Router() {
  return (
    <Switch>
      <Route path="/inspect/:serverId" component={Inspect} />
      <Route component={MainApp} />
    </Switch>
  );
}
