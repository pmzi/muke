import React from 'react';
import ReactDOM from 'react-dom';
import Router from './views/Router';

import './stylesheets/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
