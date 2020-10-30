import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from 'antd';
import { LoadingOutlined, ExclamationCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export default function ServerInfoTag({ serverStatus }) {
  const className = 'm-0';
  if (serverStatus === 'stopped') return <Tag className={className} icon={<ExclamationCircleOutlined />} color="warning">Stopped</Tag>;
  if (serverStatus === 'running') return <Tag className={className} icon={<LoadingOutlined />} color="processing">Running</Tag>;
  if (serverStatus === 'error') return <Tag className={className} icon={<CloseCircleOutlined />} color="error">Error</Tag>;
}

ServerInfoTag.propTypes = {
  serverStatus: PropTypes.oneOf(['running', 'stopped', 'error']).isRequired,
};
