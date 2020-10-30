import React, { useState } from 'react';

import ServerInfoTag from './ServerInfoTag';
import ServerInspect from './ServerInspect';
import ServerAction from './ServerAction';

export default function ServerActions() {
  const [serverStatus, setServerStatus] = useState('stopped');

  function startServer() {
    setServerStatus('running');
  }

  function pauseServer() {
    setServerStatus('stopped');
  }

  return (
    <div className="flex items-center">
      <ServerInfoTag serverStatus={serverStatus} />
      <ServerInspect className="mr-3 ml-5" serverStatus={serverStatus} />
      <ServerAction
        pauseServer={pauseServer}
        startServer={startServer}
        serverStatus={serverStatus}
      />
    </div>
  );
}
