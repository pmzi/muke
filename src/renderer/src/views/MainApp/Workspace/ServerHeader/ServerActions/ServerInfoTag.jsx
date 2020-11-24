import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from 'antd';
import { LoadingOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { workspaceState } from '@common/constants/serverRelated';

export default function ServerInfoTag({ serverStatus }) {
  const className = 'm-0';
  if (serverStatus === workspaceState.PAUSED) return <Tag className={className} icon={<ExclamationCircleOutlined />} color="warning">Stopped</Tag>;
  if (serverStatus === workspaceState.RUNNING) return <Tag className={className} icon={<LoadingOutlined />} color="processing">Running</Tag>;
}

ServerInfoTag.propTypes = {
  serverStatus: PropTypes.oneOf(Object.values(workspaceState)).isRequired,
};
