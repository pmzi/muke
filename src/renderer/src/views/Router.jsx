import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import MainApp from './MainApp';

export default function Router() {
  return (
    <Switch>
      <Route path="/inspect/:serverId" component={() => <h1>Hey</h1>} />
      <Route component={MainApp} />
    </Switch>
  );
}
