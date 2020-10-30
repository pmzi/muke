import React from 'react';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export default function ServerActions({ serverStatus, startServer, pauseServer }) {
  const paused = serverStatus !== 'running';
  const actionIcon = paused
    ? <CaretRightOutlined onClick={startServer} className="text-green-600 select-none text-3xl" />
    : <PauseOutlined onClick={pauseServer} className="text-red-600 select-none text-3xl" />;

  function handleClick() {
    if (paused) startServer();
    else pauseServer();
  }
  return (
    <Button
      type="text"
      shape="circle"
      icon={actionIcon}
      onClick={handleClick}
      className="flex items-center justify-center"
    />
  );
}

ServerActions.propTypes = {
  serverStatus: PropTypes.oneOf(['running', 'stopped', 'error']).isRequired,
  startServer: PropTypes.func.isRequired,
  pauseServer: PropTypes.func.isRequired,
};
