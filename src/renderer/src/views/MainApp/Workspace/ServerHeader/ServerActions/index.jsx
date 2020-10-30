import React, { useState } from 'react';

import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import ServerInfoTag from './ServerInfoTag';
import ServerInspect from './ServerInspect';

export default function ServerActions() {
  const [serverStatus, setServerStatus] = useState('stopped');

  function startServer() {
    setServerStatus('running');
  }

  function pauseServer() {
    setServerStatus('stopped');
  }

  const actionContent = serverStatus !== 'running'
    ? <CaretRightOutlined onClick={startServer} className="text-green-600 select-none text-3xl" />
    : <PauseOutlined onClick={pauseServer} className="text-red-600 select-none text-3xl" />;
  return (
    <div className="flex items-center">
      <ServerInfoTag serverStatus={serverStatus} />
      <ServerInspect className="mr-3 ml-5" serverStatus={serverStatus} />
      { actionContent }
    </div>
  );
}