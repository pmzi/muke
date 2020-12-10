import React from 'react';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { workspaceState } from '@common/constants/serverRelated';

export default function ServerAction({ serverStatus, startServer, pauseServer }) {
  const paused = serverStatus !== 'running';
  const actionIcon = paused
    ? <CaretRightOutlined className="text-green-600 select-none text-3xl" />
    : <PauseOutlined className="text-red-600 select-none text-3xl" />;

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

ServerAction.propTypes = {
  serverStatus: PropTypes.oneOf(Object.values(workspaceState)).isRequired,
  startServer: PropTypes.func.isRequired,
  pauseServer: PropTypes.func.isRequired,
};
