import React from 'react';

import {
  Route,
  Switch,
  MemoryRouter,
  Redirect,
} from 'react-router-dom';

import Auth from './Auth';

function RedirectLogin() {
  return <Redirect to="/auth/login" />;
}

export default function Router() {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route component={RedirectLogin} />
      </Switch>
    </MemoryRouter>
  );
}
