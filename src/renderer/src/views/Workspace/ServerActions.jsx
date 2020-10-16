import React, { useState } from 'react';

import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';

export default function ServerActions() {
  const [isServerRunning, setIsServerRunning] = useState(false);

  function startServer() {
    setIsServerRunning(true);
  }

  function pauseServer() {
    setIsServerRunning(false);
  }

  const actionContent = isServerRunning
    ? <PauseOutlined onClick={pauseServer} className="text-red-600 select-none text-3xl" />
    : <CaretRightOutlined onClick={startServer} className="text-green-600 select-none text-3xl" />;
  return (
    <>
      { actionContent }
    </>
  );
}
