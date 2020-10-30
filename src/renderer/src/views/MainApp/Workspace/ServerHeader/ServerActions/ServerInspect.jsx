import React from 'react';
import { BugOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { openModalSubWindow } from '@/common/utilities/window';
import { INSPECT } from '@common/constants/urls';

export default function ServerInspectButton({ serverStatus, className }) {
  const disabled = serverStatus !== 'running';
  // const disabledClasses = disabled ? ' cursor-not-allowed text-gray-600' : ' cursor-pointer';

  function openInspectPage() {
    openModalSubWindow(INSPECT(1));
  }

  return (
    <Button
      type="text"
      icon={<BugOutlined />}
      onClick={openInspectPage}
      disabled={disabled}
      className={`flex items-center justify-center ${className}`}
    />
  );
}

ServerInspectButton.propTypes = {
  serverStatus: PropTypes.oneOf(['running', 'stopped', 'error']).isRequired,
  className: PropTypes.string,
};

ServerInspectButton.defaultProps = {
  className: '',
};
