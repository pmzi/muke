import React from 'react';
import { BugOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { openModalSubWindow } from '@/common/utilities/window';
import { INSPECT } from '@common/constants/urls';
import { workspaceState } from '@common/constants/serverRelated';

export default function ServerInspectButton({ serverStatus, className }) {
  const disabled = serverStatus !== 'running';

  function openInspectPage() {
    openModalSubWindow(INSPECT(1));
  }

  return (
    <Button
      type="text"
      shape="circle"
      icon={<BugOutlined />}
      onClick={openInspectPage}
      disabled={disabled}
      className={`flex items-center justify-center ${className}`}
    />
  );
}

ServerInspectButton.propTypes = {
  serverStatus: PropTypes.oneOf(Object.values(workspaceState)).isRequired,
  className: PropTypes.string,
};

ServerInspectButton.defaultProps = {
  className: '',
};
