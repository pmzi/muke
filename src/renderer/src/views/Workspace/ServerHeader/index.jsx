import React from 'react';

import ServerInfo from './ServerInfo/index';
import ServerActions from './ServerActions';

export default function ServerHeader() {
  return (
    <>
      <ServerInfo />

      <ServerActions />
    </>
  );
}
